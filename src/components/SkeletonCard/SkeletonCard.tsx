import cardStyles from "../UserCard/UserCard.module.css";
import styles from "./SkeletonCard.module.css";

export function SkeletonCard() {
  return (
    <div className={cardStyles.userCard} aria-hidden="true">
      <div className={cardStyles.userCardHeader}>
        <div className={`${styles.skeleton} ${styles.skeletonAvatar}`} />
        <div className={cardStyles.userCardIdentity}>
          <h2 className={cardStyles.userCardName}>
            <span
              className={`${styles.skeleton} ${styles.skeletonLine} ${styles.skeletonName}`}
            />
          </h2>
          <span className={cardStyles.userCardUsername}>
            <span
              className={`${styles.skeleton} ${styles.skeletonLine} ${styles.skeletonUsername}`}
            />
          </span>
        </div>
      </div>
      <div className={cardStyles.userCardBody}>
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className={cardStyles.infoRow}>
            <span className={cardStyles.infoRowIcon} aria-hidden="true">
              <span className={`${styles.skeleton} ${styles.skeletonIcon}`} />
            </span>
            <span className={cardStyles.infoRowValue}>
              <span className={`${styles.skeleton} ${styles.skeletonLine}`} />
            </span>
          </div>
        ))}
      </div>
      <div className={cardStyles.userCardFooter}>
        <span className={cardStyles.badge}>
          <span className={`${styles.skeleton} ${styles.skeletonBadge}`} />
        </span>
        <span className={cardStyles.badge}>
          <span className={`${styles.skeleton} ${styles.skeletonBadge}`} />
        </span>
      </div>
    </div>
  );
}
