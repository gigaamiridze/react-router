type geo = {
  lat: string;
  lng: string;
}

type company = {
  name: string;
  catchPhrase: string;
  bs: string;
}

type address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: geo;
}

export type userType = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: address;
  phone: string;
  website: string;
  company: company;
}
