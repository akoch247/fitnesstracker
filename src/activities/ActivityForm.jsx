import useMutation from "../api/useMutation";

/** Users can create new activities with a name and description. */
export default function ActivityForm() {
  const {
    mutate: add,
    loading,
    error,
  } = useMutation("POST", "/activities", ["activities"]);

  const addActivity = (formData) => {
    const name = formData.get("name");
    const description = formData.get("description");
    add({ name, description });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    addActivity(formData);
  };

  return (
    <>
      <h2>Add a new activity</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input type="text" name="name" />
        </label>
        <label>
          Description
          <input type="text" name="description" />
        </label>
        <button>{loading ? "Adding..." : "Add activity"}</button>
        {error && <output>{error}</output>}
      </form>
    </>
  );
}
