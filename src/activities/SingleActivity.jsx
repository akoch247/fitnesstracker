import { useParams, useNavigate } from "react-router-dom";
import useQuery from "../api/useQuery";
import useMutation from "../api/useMutation";
import { useAuth } from "../auth/AuthContext";

export default function SingleActivity() {

  const { id } = useParams();
  const { data: activity } = useQuery(`/activities/${id}`, `activity-${id}`);
  const {
    mutate: deleteActivity,
    loading: deleting,
    error: deleteError,
  } = useMutation("DELETE", `/activities/${id}`, ["activities"]);

  const handleDelete = async () => {
    try {
      await deleteActivity();
      Navigate("/activities");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <section>
      <h1>Name: {activity.name}</h1>
      <p>Description: {activity.description}</p>
      <p>Creator Name: {activity.creatorName}</p>
      {token && (
        <button onClick={handleDelete} disabled={deleting}>
          {deleting ? "Deleting" : "Delete Activity"}
        </button>
      )}
    </section>
  );
}