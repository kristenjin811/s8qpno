export interface User {
  name: {
    first: string;
    last: string; 
  }
  email: string;
  phone: number;
  picture: {
    thumbnail: string; 
  }
  dob: {
    date: string; 
  }
  showDOB: boolean; 
}
