const nanoid = require('nanoid');

const Util = {
  formatDate(dateString: string) {
    const DATE_OPTIONS = {year: 'numeric', month: 'short'} as const;

    return (new Date(dateString)).toLocaleDateString('en-US', DATE_OPTIONS);
  },

  generateIdKeys(listLength: number) {
    const list = new Array(listLength).fill('');
    const generatedIdList = list.map(() => nanoid(10));
    return generatedIdList;
  },

   getLanguage() {
    if (navigator.languages !== undefined)
      return navigator.languages[0].split('-')[1];
    return navigator.language;
  }
}

export default Util;