import { profile } from "@Data/profile";

export default function Footer() {
  return <footer className="shell foot">© {new Date().getFullYear()} {profile.name}</footer>;
}
