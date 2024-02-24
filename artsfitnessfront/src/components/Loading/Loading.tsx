import Spinner from 'react-bootstrap/Spinner';

function Loading() {
  return (
    <>
      <Spinner animation="border" variant="primary" className="pinner-custom-size"/>
    </>
  );
}

export default Loading;