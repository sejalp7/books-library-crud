import { BookModal } from "../../datamodel";
import "./ModalBox.scss";

//Component to show the selected Book details
const ModalBox = ({
    id,
    title,
    author,
    description,
    publicationDate,
    cover,
    closeModal
}: BookModal) => {
  return (
    <div id="bookModal" className="modal" key={id}>
    <div className="modal-content">
      <div className="modal-header">
        <span className="close" onClick={() => closeModal()}>&times;</span>
        <h2>{title}</h2>
      </div>
      <div className="modal-body">
        <img src={cover} alt={title}/>
        <p>{author}</p>
        <p>{description}</p>
        <p>{publicationDate.toString()}</p>
      </div>
    </div>
  </div>
  );
};

export default ModalBox;
