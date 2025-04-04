export interface PostsType {
    id: number;
    title: string;
    body: string;
    userId: number;
  }
export const GetDetails = async (id: number): Promise<PostsType> => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      cache: "no-store",
    });
  
    return res.json();
  };
  