export const filterTree = (data: any, query: string) => {
  const nameMatches = data.name.toLowerCase().includes(query.toLowerCase());

  if (data.children) {
    const filteredChildren = data.children
      .map((child: any[]) => filterTree(child, query))
      .filter((child: any) => child != null);

    if (filteredChildren.length > 0 || nameMatches) {
      return { ...data, children: filteredChildren };
    } else {
      return null;
    }
  } else if (nameMatches) {
    return { ...data, children: [] };
  }

  return nameMatches ? { ...data } : null;
};
