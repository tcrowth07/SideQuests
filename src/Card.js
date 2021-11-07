function Card(props) {
  const colorGold = "#c7a55a"
  const colorRed = "#cc070b";
  // const colorGreen = "#a3b849";
  // const colorBlue = "#05ace1";

  function GetFormattedDate(date) {
    let mm = date.substring(5, 7);
    let dayString = date.substring(8, 10);
    let dd = parseInt(dayString) - 1;
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
    if (daysUntilDue <= 1) return colorRed;
    else return colorGold;
  }

  function GetDaysLeftString(daysUntilDue) {
    if (daysUntilDue <= -2) return Math.abs(daysUntilDue) + " days past due";
    if (daysUntilDue === -1) {
      return Math.abs(daysUntilDue) + " day past due";
    }
    if (daysUntilDue === 0) return "Due today";
    if (daysUntilDue === 1) return daysUntilDue + " day left";
    if (daysUntilDue >= 2) return daysUntilDue + " days left";
  }

  return (
    <div
      className="Card-body"
      style={{ borderColor: GetDateColor(DaysUntilDue(props.date)) }}
    >
      <div style={{ width: "85%" }}>
        <h4 className="child" style={{ marginTop: "7px" }}>
          {props.title}
        </h4>
        <p className="child" style={{ fontSize: "calc(6px + 1vmin)", marginTop: "3px" }}>
          {props.description}
        </p>
      </div>
      <div className="Date-container">
        <h5 className="date">{GetFormattedDate(props.date)}</h5>
        <h5
          className="date"
          style={{ color: DaysUntilDue(props.date) <=3 ? colorRed : colorGold }}
        >
          {GetDaysLeftString(DaysUntilDue(props.date))}
        </h5>
      </div>
    </div>
  );
}

export default Card;
