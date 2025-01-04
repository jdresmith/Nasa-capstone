// A footer that displays the title of the given image of the day, info button is used to display description and information to users//

export default function Footer(props) {
  const { showModal, handleToggleModal, data } = props;
  return (
    <footer>
      <div className="bgGradient"></div>
      <div>
        <h1>NASA project</h1>
        <h2>{data?.title}</h2>
      </div>
      <button onClick={handleToggleModal}>
        <i className="fa-solid fa-info"></i>
      </button>
    </footer>
  );
}
