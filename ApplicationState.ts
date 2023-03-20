interface User {
  id: string;
  recipient: string;
  recipientJoined: boolean;
  joined: boolean;
  device: {
    microphone: string;
    camera: string;
    speaker: string;
  };
}

interface Therapist extends User {
  notes: string;
}

interface Member extends User {
  relaxationVideo: {
    started: boolean;
    ended: boolean;
    link: string;
  };
}

interface Session {
  member: Member;
  therapist: Therapist;
  schedule: {
    startAt: string;
    endAt: string;
  };
  meetingLink: string;
  complete: boolean;
}
