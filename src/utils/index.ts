import { pixivArtworkLink, pixivUserLink } from '@/config'

export class Setting {
  static set(settingKey: string, value: any) {
    localStorage.setItem(`setting-${settingKey}`, String(value))
  }

  static get(settingKey: string, settingType: 'str' | 'json' | 'number' | 'bool', defaultValue: any): any {
    const value = localStorage.getItem(`setting-${settingKey}`)
    if (value === null)
      return defaultValue
    if (settingType === 'str')
      return value

    if (settingType === 'json')
      return JSON.parse(value)

    if (settingType === 'number')
      return Number(value)

    if (settingType === 'bool')
      return value === 'true'
  }
}

export function openPixiv(pid: number) {
  window.open(pixivArtworkLink.replace('{id}', pid.toString()), '_blank')
}

export function openPixivUser(uid: number) {
  window.open(pixivUserLink.replace('{id}', uid.toString()), '_blank')
}
