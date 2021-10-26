function Card(props) {
  function GetFormattedDate(date) {
    let mm = date.substring(5, 7);
    let dd = date.substring(8, 10);
    return mm + " / " + dd;
  }

  function DaysUntilDue(date) {
    let today = new Date();
    let dueDate = new Date(date);
    let days = Math.round(
      (dueDate.getTime() - today.getTime()) / (1000 * 3600 * 24)
    );
    return days.toString();
  }

  function GetDateColor(daysUntilDue) {
    if(daysUntilDue <= 1) return "#F21B3F"
    if(daysUntilDue > 1 && daysUntilDue <= 3) return "#FF9914"
    if(daysUntilDue >3) return "#ABFF4F"
  }

  return (
    <div className="Card-body" style={{backgroundColor:GetDateColor(DaysUntilDue(props.date))}}>
      <h3 className="child" style={{ width: "60%" }}>
        {props.title}
      </h3>
      <div className="Date-container" >
        <h5 className="date">{GetFormattedDate(props.date)}</h5>
        <h5 className="date">{DaysUntilDue(props.date) > 0 ? DaysUntilDue(props.date) + " days left" : "Due today"}</h5>
      </div>
    </div>
  );
}

export default Card;
