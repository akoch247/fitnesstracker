import { useNavigate, useParams } from "react-router-dom"
import { useAuth } from "../auth/AuthContext";
import useQuery from "../api/useQuery";
import useMutation from "../api/useMutation";


export default function SingleRoutine() {
    const { routineID } = useParams();
    const { token } = useAuth();
    const navigate = useNavigate();

    const {
        data: routine,
        loading,
        error,
    } = useQuery(`/routines/${routineID}`, ["routines", routineID]);

    const {
        mutate: deleteRoutine,
        loading: deleteLoading,
        error: deleteError,
    } = useMutation("DELETE", `/routines/${routineID}`, ["routines"]);

      //delete action
    const handleDelete = async () => {
        try {
        await deleteRoutine();
        navigate("/routines");
        }  catch (e) {
        console.error("failed to delete", e);
        }
    };

    if (loading) return <p>Loading</p>;
    if (error) return <p>Error: {error}</p>;
    if (!routine) return <p>No routine</p>;

    return (
        <div>
            <h1>{routine.name}</h1>
            <p>{routine.creatorName}</p>
            <p>{routine.goal}</p>
            {token && (
                <button onClick={handleDelete} disabled={deleteLoading}>
                    {deleteLoading ? "Deleting..." : "Delete routine"}
                </button>
            )}
            <h3>Sets</h3>
        </div>
    )
}