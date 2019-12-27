const wrapName = (name: string) => `【 ${name} 】`;

export const REG_CHECK_CONFIG = {
  fullName: {
    reg: /^.{2,}$/,
    regFailMsg: (name: string) => wrapName(name) + `至少为2个字符!`
  },
  tel: {
    reg: /^1([38]\d|5[0-35-9]|7[3678])\d{8}$/,
    regFailMsg: (name: string) => wrapName(name) + `格式不正确!`
  },
  sickNo: {
    reg: /^\d{10}$/i,
    regFailMsg: (name: string) => wrapName(name) + `格式不正确!`
  }
};
