import React, { useState } from "react";

export default function NewPost() {
  const [file, setFile] = useState<any>();
  const [caption, setCaption] = useState("");

  const submit = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("image", file[0]!);
    formData.append("caption", caption);
    console.log(formData);
  };

  return (
    <form onSubmit={submit}>
      <input
        onChange={(e) => setFile(e.target.files)}
        type="file"
        accept="image/*"
      ></input>
      <input
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
        type="text"
        placeholder="Caption"
      ></input>
      <button type="submit">Submit</button>
    </form>
  );
}
