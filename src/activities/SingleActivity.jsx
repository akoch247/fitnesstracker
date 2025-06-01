import { useParams, useNavigate } from "react-router-dom";
import useQuery from "../api/useQuery";
import useMutation from "../api/useMutation";
import { useAuth } from "../auth/AuthContext";

export default function SingleActivity() {
  const { activityID } = useParams();
  const { token } = useAuth();
  const {
    data: activity,
    loading,
    error,
  } = useQuery(`/activities/${activityID}`, `activity-${activityID}`);

  const {
    mutate: deleteActivity,
    loading: deleting,
    error: deleteError,
  } = useMutation("DELETE", `/activities/${activityID}`, ["activities"]);

  if (loading) return <p>Loading</p>;
  if (error) return <p>Error: {error}</p>;
  if (!activity) return <p>No activity</p>;



  return (
    <div>
      <h1>{activity.name}</h1>
      <p>{activity.creator?.username}</p>
      <p>{activity.description}</p>
      {token && (
        <button onClick={() => deleteActivity()}>
          {deleting ? "Deleting" : "Delete"}
        </button>
      )}
    </div>
  );
}