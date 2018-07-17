export interface ApiItem<T> {
  data: T;
}

export interface Post {
  content: string;
  created_at: string;
  id: number;
  image_url: string;
  lat: string;
  long: string;
  title: string;
  updated_at: string;
}
