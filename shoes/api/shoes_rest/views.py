from django.shortcuts import render
from django.http import JsonResponse
from .models import Shoes, BinVO
from common.json import ModelEncoder
from django.views.decorators.http import require_http_methods
import json


class ShoesListEncoder(ModelEncoder):
    model = Shoes
    properties = [
        "manufacturer",
        "model_name",
        "picture_url",
    ]

    def get_extra_data(self, o):
        return {
            "id": o.id,
            "closet_name": o.bin.closet_name,
            }

class BinVODetailEncoder(ModelEncoder):
    model = BinVO
    properties = [
        "closet_name",
        "bin_number",
    ]

class ShoesDetailEncoder(ModelEncoder):
    model = Shoes
    properties = [
        "manufacturer",
        "model_name",
        "color",
        "picture_url",
        "bin",
    ]
    encoders = {
        "bin": BinVODetailEncoder(),
    }


@require_http_methods(["GET", "POST"])
def api_list_shoes(request):

    if request.method == "GET":
        shoes = Shoes.objects.all()
        return JsonResponse(
            {"shoes": shoes},
            encoder=ShoesListEncoder
        )
    else:
        content = json.loads(request.body)
        try:
            bin_id = content["bin"]
            bin = BinVO.objects.get(id=bin_id)
            content["bin"] = bin
        except BinVO.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid bin id"},
                status=400
            )
        shoes = Shoes.objects.create(**content)
        return JsonResponse(
            shoes,
            encoder=ShoesDetailEncoder,
            safe=False,
        )

@require_http_methods(["DELETE", "GET", "PUT"])
def api_show_shoes(request, id):

    if request.method == "GET":
        shoes = Shoes.objects.filter(id=id)
        return JsonResponse(
            shoes,
            encoder=ShoesDetailEncoder,
            safe=False,
        )

    elif request.method == "DELETE":
        count, _ = Shoes.objects.filter(id=id).delete()
        return JsonResponse({"deleted": count > 0})

    else:
        content = json.loads(request.body)
        try:
            if "shoes" in content:
                shoes = Shoes.objects.get(id=content["shoes"])
                content["shoes"] = shoes
        except Shoes.DoesNotExist:
            return JsonResponse(
                {"message": "Those shoes do not exist"},
                status=400,
            )
    Shoes.objects.filter(id=id).update(**content)
    shoes = Shoes.objects.get(id=id)
    return JsonResponse(
        shoes,
        encoder=ShoesDetailEncoder,
        safe=False,
    )
