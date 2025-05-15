interface Skills {
  name: string;
  color: string;
  textColor: string;
}

export interface Career {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  position: string;
  skills: Skills[];
  details: string[];
}
