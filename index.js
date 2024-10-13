const { registerMacro } = SillyTavern.getContext();

function getQuotedCharNames() {
  const context = SillyTavern.getContext();

  // Helper function to split and process names
  const processName = (name) => name.split(/\s+/);

  // Initial array with main character names
  let result = [...processName(context.name1), ...processName(context.name2)];

  if (context.groupId) {
    const group = context.groups.find(x => x.id === context.groupId);

    if (group && Array.isArray(group.members)) {
      const groupNames = group.members
        .map(x => context.characters.find(y => y.avatar === x))
        .filter(x => x && x.name && x.name !== context.name1 && x.name !== context.name2)
        .reduce((acc, x) => [...acc, ...processName(x.name)], []);
      
      result = [...result, ...groupNames];
    }
  }

  return result.filter(x => x).map(x => `"${x}"`).join(', ');
}

jQuery(async () => {
  registerMacro('quotedCharNames', getQuotedCharNames);
});
