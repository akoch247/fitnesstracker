import useQuery from "../api/useQuery";

export default function RoutinesPage() {
    const {
        data: routines,
        loading,
        error,
    } = userQuery("/routines", "routines");

    return (
        <div>
            <h1>Routines</h1>
            <ul>
                {routines.map((routine) => (
                    <li key={routine.id}>{routine.name}</li>
                ))}
            </ul>
        </div>
    );
}