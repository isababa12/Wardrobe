function HatsList(props) {
  return (
    <>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Style Name</th>
            <th>Fabric</th>
            <th>Color</th>
            <th>Picture</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {props.hats.map((hat) => {
            return (
              <tr key={hat.id}>
                <td>{hat.style_name}</td>
                <td>{hat.fabric}</td>
                <td>{hat.color}</td>
                <td>
                  <img
                    className="img-thumbnail"
                    src={hat.picture_url}
                    height={75}
                    width={75}
                  ></img>
                </td>
                <td>{hat.location}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default HatsList;
