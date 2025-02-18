import { Card } from "react-bootstrap";
import { useDisplayContext } from "../../context/DisplayContext";

const Display = () => {
  const { submissions } = useDisplayContext();

  return (
    <Card className="mt-4 border-0">
      <Card.Header className="bg-white border-0 pt-4">
        <h3 className="mb-0">📋 User Profiles</h3>
      </Card.Header>
      <Card.Body>
        {submissions.length === 0 ? (
          <div className="no-submissions">No profiles submitted yet</div>
        ) : (
          submissions.map((submission, index) => (
            <div
              key={index}
              className="submission-item p-3 d-flex justify-content-between align-items-center"
            >
              <div>
                <span className="h5 mb-0">👤 {submission.name}</span>
              </div>
              <div>
                <span className="text-muted">Age: {submission.age}</span>
              </div>
            </div>
          ))
        )}
      </Card.Body>
    </Card>
  );
};

export default Display;
