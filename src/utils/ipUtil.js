const getIpAddress = ip => {
  address = ip
  if (ip.substr(0, 7) == '::ffff:') {
    address = ip.substr(7)
  }
  return address
}

const getIpFromHttpRequest = req => {
  return getIpAddress(
    req.headers['x-forwarded-for'] || req.connection.remoteAddress
  )
}

module.exports = {
  getIpAddress,
  getIpFromHttpRequest,
}
