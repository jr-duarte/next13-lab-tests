import timeout from "@/utils/timeout";

export default function SectionFormServerAction() {
  const handleSubmit = async (formData: FormData) => {
    "use server";
    timeout(6000);
    console.log(formData);
  };

  return (
    <form action={handleSubmit} className="flex flex-col">
      <input className="text-black text-opacity-100" type="text" name="name" />
      <input
        className="text-black text-opacity-100"
        type="text"
        name="sobreNome"
      />
      <button type="submit">Submit</button>
    </form>
  );
}
