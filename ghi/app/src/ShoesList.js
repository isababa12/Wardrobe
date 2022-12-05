function ShoesList(props) {
    return (
        <>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Manufacturer</th>
                        <th>Model</th>
                        <th>Picture</th>
                        <th>Closet</th>
                    </tr>
                </thead>
                <tbody>
                    {props.shoes.map((shoes) => {
                        return(
                            <tr key={shoes.id}>
                                    <td>{shoes.manufacturer}</td>
                                    <td>{shoes.model_name}</td>
                                    <td><img
                                    className="img-thumbnail"
                                    src={shoes.picture_url}
                                    height={75}
                                    width={75}
                                    alt="shoes"
                                    />
                                </td>
                                <td>{shoes.closet_name}</td>
                                <td>
                                    <button
                                        value={shoes.id}
                                        onClick={(e) => props.deleteShoe(e.target.value)}
                                        className="btn btn-danger"
                                    >
                                    Delete
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
}

export default ShoesList;
