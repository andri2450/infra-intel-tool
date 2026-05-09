export function analyzeText(text: string) {
  const lower = text.toLowerCase();

  if (lower.includes("503")) {
    return "Detected 503 Error. Likely PHP socket issue or service down. Check PHP-FPM / restart service.";
  }

  if (lower.includes("wp_memory_limit")) {
    return "Duplicate WP_MEMORY_LIMIT detected. Check wp-config.php for multiple definitions.";
  }

  if (lower.includes("could not move")) {
    return "Permission issue detected. Check folder ownership and wp-content permissions.";
  }

  if (lower.includes("550")) {
    return "Email bounce detected. Possible inbox full or authentication issue (SPF/DKIM).";
  }

  if (lower.includes("max defers")) {
    return "Email rate limit exceeded. Check outgoing mail per hour limit.";
  }

  return "No rule matched. Consider deeper analysis.";
}
