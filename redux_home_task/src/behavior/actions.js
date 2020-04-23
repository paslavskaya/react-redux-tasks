export const LANGUAGE_CHANGED = "LANGUAGE_CHANGED";
export const language_changed = (newLanguageId) => ({
  type: LANGUAGE_CHANGED,
  payload: newLanguageId,
});
