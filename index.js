const { registerMacro } = SillyTavern.getContext();

function getQuotedCharNames() {
  const context = SillyTavern.getContext();
  const result = [context.name1, context.name2];

  if (context.groupId) {
    const group = context.groups.find(x => x.id === context.groupId);

    if (group && Array.isArray(group.members)) {
      const names = group.members
        .map(x => context.characters.find(y => y.avatar === x))
        .filter(x => x && x.name && x.name !== context.name1 && x.name !== context.name2)
        .map(x => x.name);
      result.push(...names);
    }
  }

  return result.filter(x => x).map(x => `"${x}"`).join(', ');
}

jQuery(async () => {
  registerMacro('quotedCharNames', getQuotedCharNames);
});
