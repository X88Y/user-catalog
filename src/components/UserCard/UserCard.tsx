import type { User } from "../../types";
import styles from "./UserCard.module.css";

interface Props {
  user: User;
}

export function UserCard({ user }: Props) {
  const fullName = `${user.firstName} ${user.lastName}`;

  return (
    <article className={styles.userCard}>
      <div className={styles.userCardHeader}>
        <img
          src={user.image}
          alt={fullName}
          className={styles.userCardAvatar}
          loading="lazy"
        />
        <div className={styles.userCardIdentity}>
          <h2 className={styles.userCardName}>{fullName}</h2>
          <span className={styles.userCardUsername}>@{user.username}</span>
        </div>
      </div>

      <div className={styles.userCardBody}>
        <InfoRow icon="✉" label="Email" value={user.email} />
        <InfoRow icon="📞" label="Phone" value={user.phone} />
        <InfoRow
          icon="📍"
          label="Location"
          value={`${user.address.city}, ${user.address.state}`}
        />
        <InfoRow
          icon="🏢"
          label="Company"
          value={`${user.company.name} · ${user.company.department}`}
        />
      </div>

      <div className={styles.userCardFooter}>
        <Badge label={user.gender} />
        <Badge label={`Age ${user.age}`} />
      </div>
    </article>
  );
}

function InfoRow({
  icon,
  label,
  value,
}: {
  icon: string;
  label: string;
  value: string;
}) {
  return (
    <div className={styles.infoRow} title={label}>
      <span className={styles.infoRowIcon} aria-hidden="true">
        {icon}
      </span>
      <span className={styles.infoRowValue}>{value}</span>
    </div>
  );
}

function Badge({ label }: { label: string }) {
  return <span className={styles.badge}>{label}</span>;
}
