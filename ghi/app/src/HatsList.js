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
              <tr key={hat.location.import_href}>
                <td>{hat.style_name}</td>
                <td>{hat.fabric}</td>
                <td>{hat.color}</td>
                <td>{hat.picture_url}</td>
                <td>{hat.location.closet_name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default HatsList;
