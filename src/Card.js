function Card(props) {
  function GetFormattedDate(date) {
    let mm = date.substring(5, 7);
    let dayString = date.substring(8, 10);
    let dd = parseInt(dayString) - 1
    console.log(dd)
    return mm + " / " + dd;
  }

  function DaysUntilDue(date) {
    let today = new Date();
    let dueDate = new Date(date);
    return Math.round(
      (dueDate.getTime() - today.getTime()) / (1000 * 3600 * 24)
    );
  }

  function GetDateColor(daysUntilDue) {
    if (daysUntilDue <= 1) return "#F21B3F";
    if (daysUntilDue > 1 && daysUntilDue <= 3) return "#FF9914";
    if (daysUntilDue > 3) return "#ABFF4F";
  }

  function GetDaysLeftString(daysUntilDue) {
    if (daysUntilDue <= -2) return Math.abs(daysUntilDue) + " days past due";
    if (daysUntilDue === -1) {
      console.log("minus one");
      return Math.abs(daysUntilDue) + " day past due";
    }
    if (daysUntilDue === 0) return "Due today";
    if (daysUntilDue === 1) return daysUntilDue + " day left";
    if (daysUntilDue >= 2) return daysUntilDue + " days left";
  }

  return (
    <div
      className="Card-body"
      style={{ backgroundColor: GetDateColor(DaysUntilDue(props.date)) }}
    >
      <h3 className="child" style={{ width: "60%" }}>
        {props.title}
      </h3>
      <div className="Date-container">
          {console.log(props.date)}
        <h5 className="date">{GetFormattedDate(props.date)}</h5>
        <h5 className="date">{GetDaysLeftString(DaysUntilDue(props.date))}</h5>
      </div>
    </div>
  );
}

export default Card;
