/**
 * Formats a number with commas.
 * 1240 → "1,240"
 */
export function formatNumber(n: number): string {
  return n.toLocaleString();
}

/**
 * Appends a suffix to a number.
 * formatCount(100) → "100+"
 */
export function formatCount(n: number, suffix = "+"): string {
  return `${n}${suffix}`;
}

/**
 * Returns a capacity string.
 * formatCapacity(34, null) → "Unlimited"
 * formatCapacity(34, 80)   → "34 / 80"
 */
export function formatCapacity(
  filled: number,
  capacity: number | null
): string {
  if (!capacity) return "Unlimited";
  return `${filled} / ${capacity}`;
}

/**
 * Returns a spots remaining string.
 * formatSpotsLeft(34, 80)   → "46 spots remaining"
 * formatSpotsLeft(79, 80)   → "Only 1 spot left!"
 * formatSpotsLeft(34, null) → "Open registration"
 */
export function formatSpotsLeft(
  filled: number,
  capacity: number | null
): string {
  if (!capacity) return "Open registration";
  const left = capacity - filled;
  if (left <= 0) return "Fully booked";
  if (left <= 5) return `Only ${left} spot${left === 1 ? "" : "s"} left!`;
  return `${left} spots remaining`;
}

/**
 * Formats a date string for display.
 * "2025-07-26" → "July 26, 2025"
 */
export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    year:  "numeric",
    month: "long",
    day:   "numeric",
  });
}

/**
 * Returns a relative time string.
 * "2 hours ago", "1 day ago", "5 days ago"
 */
export function formatRelativeTime(dateStr: string): string {
  const date     = new Date(dateStr);
  const now      = new Date();
  const diffMs   = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHrs  = Math.floor(diffMins / 60);
  const diffDays = Math.floor(diffHrs / 24);

  if (diffMins < 60)  return `${diffMins} min ago`;
  if (diffHrs  < 24)  return `${diffHrs} hour${diffHrs === 1 ? "" : "s"} ago`;
  if (diffDays < 7)   return `${diffDays} day${diffDays === 1 ? "" : "s"} ago`;
  return formatDate(dateStr);
}

/**
 * Converts a view count to a compact string.
 * 1830 → "1.8k"
 */
export function formatViews(count: number): string {
  if (count >= 1000) return `${(count / 1000).toFixed(1)}k`;
  return String(count);
}