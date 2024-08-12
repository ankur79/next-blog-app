"use server";

export async function createPost(formData: FormData){
    console.log("createPost=", formData)
    const title = formData.get("title") as string;
    console.log(title);
}