export default interface User {
  uid: string;
  emailVerified: boolean;
  displayName: string | null;
  email: string | null;
  photoURL: string | null | undefined;
}
