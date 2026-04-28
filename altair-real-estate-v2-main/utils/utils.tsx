import parsePhoneNumberFromString from 'libphonenumber-js'

export const isParentActive = (children: any, path: any) => {
    if (!children && !path) {
        return false
    }

    return children.some((item: any) => {
        const itemPath = item.path?.split('/')
        const pathItem = path.split('/')
        return itemPath[itemPath?.length - 1] === pathItem[pathItem?.length - 1]
            ? true
            : item?.subMenu?.some((item2: any) => {
                  const item2Split = item2?.path?.split('/')
                  const pathSplit = path?.split('/')
                  return (
                      item2Split[item2Split?.length] ===
                      pathSplit[pathSplit?.length - 1]
                  )
              })
    })
}

export const validatePhoneNumber = (phone: string) => {
    try {
        parsePhoneNumberFromString(`+${phone}`)
        return true
    } catch (e) {
        return false
    }
}
