export type IComment = {
  email: string;
  review: string;
};

export interface IBooks {
  email: string | null;
  _id: string;
  title: string;
  image_link: string;
  genre: string;
  author: string;
  publication: string;
  review: IComment[];
}
