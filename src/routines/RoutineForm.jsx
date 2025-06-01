import useMutation from "../api/useMutation";

export default function RoutineForm() {
    const {
        mutate: add,
        loading,
        error,
    } = useMutation("POST", "/routines", ["routines"]);

    const addRoutine = (formData) => {
        const name = formData.get("name");
        const goal = formData.get("goal");
        add({ name, goal });
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        addRoutine(formData);
      };

    return (
        <>
            <h2>Add a new routine</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name
                    <input type="text" name="name" />
                </label>
                <label>
                    Goal
                    <input type="text" name="goal" />
                </label>
                <button>{loading ? "Adding..." : "Add routine"}</button>
                {error && <output>{error}</output>}
            </form>
        </>
    )
}