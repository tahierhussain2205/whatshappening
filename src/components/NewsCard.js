import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardFooter,
  MDBCol,
} from "mdb-react-ui-kit";
import PropTypes from "prop-types";
import { useState } from "react";
import NewsModal from "../modals/NewsModal";
import AltImg from "../assets/no-image-available.png";

function NewsCard({ result }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };
  return (
    <>
      <MDBCol onClick={handleOpen} style={{ cursor: "pointer" }}>
        <MDBCard className="h-100">
          <MDBCardImage
            src={result.urlToImage || AltImg}
            alt="article image"
            position="top"
            className="h-50"
            style={{ objectFit: "cover" }}
          />
          <MDBCardBody>
            <small>
              {result.title.length > 100
                ? result.title.slice(0, 100) + "..."
                : result.title}
            </small>
          </MDBCardBody>
          <MDBCardFooter>
            <small className="text-muted">{result.source.name}</small>
          </MDBCardFooter>
        </MDBCard>
      </MDBCol>
      <NewsModal open={open} handleOpen={handleOpen} result={result} />
    </>
  );
}

NewsCard.propTypes = {
  result: PropTypes.object.isRequired,
};

export default NewsCard;
