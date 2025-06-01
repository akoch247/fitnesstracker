import { useParams, useNavigate } from "react-router-dom";
import useQuery from "../api/useQuery";
import useMutation from "../api/useMutation";
import { useAuth } from "../auth/AuthContext";

export default function SingleActivity() {
  const { activityID } = useParams();
  const { token } = useAuth();
  const navigate = useNavigate();

  //fetching the data for an activity
  const {
    data: activity,
    loading,
    error,
  } = useQuery(`/activities/${activityID}`, ["activities", activityID]);

  //delete mutation
  const {
    mutate: deleteActivity,
    loading: deleteLoading,
    error: deleteError,
  } = useMutation("DELETE", `/activities/${activityID}`, ["activities"]);

  //delete action
  const handleDelete = async () => {
    try {
      await deleteActivity();
      navigate("/activities");
    } catch (e) {
      console.error("failed to delete", e);
    }
  };

  if (loading) return <p>Loading</p>;
  if (error) return <p>Error: {error}</p>;
  if (!activity) return <p>No activity</p>;


  return (
    <div>
      <h1>{activity.name}</h1>
      <p>{activity.creatorName}</p>
      <p>{activity.description}</p>
      {token && (
        <button onClick={handleDelete} disabled={deleteLoading}>
          {deleteLoading ? "Deleting..." : "Delete activity"}
        </button>
      )}
    </div>
  );
}