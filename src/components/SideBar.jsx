// Sidebar which displays the full description, date and title. //
export default function Sidebar(props) {
  const { handleToggleModal, data } = props;
  return (
    <div className="sidebar">
      <div onClick={handleToggleModal} className="bgOverlay"></div>
      <div className="sidabarContents">
        <h2>{data?.title}</h2>

        <div className="descriptionContainer">
          <p className="descriptionTitle">{data?.date}</p>
          <p>{data?.explanation}</p>
        </div>
        <button onClick={handleToggleModal}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}
