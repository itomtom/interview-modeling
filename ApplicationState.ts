interface UserSession {
  name: string;
  status: boolean;
  link: string;
  joined: boolean;
}

interface Therapist extends UserSession {}

interface Member extends UserSession {
  showRelaxationVideo: boolean;
  relaxationLink: string;
}

interface ApplicationState {
  member: Member;
  therapist: Therapist;
  schedule: {
    startAt: string;
    endAt: string;
  };
}
