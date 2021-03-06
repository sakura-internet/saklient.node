/**
 * @module saklient.errors
 */
module.exports = {
    Error: require('./Error'),
    ExceptionFactory: require('./ExceptionFactory'),
    HttpBadGatewayException: require('./HttpBadGatewayException'),
    HttpBadRequestException: require('./HttpBadRequestException'),
    HttpConflictException: require('./HttpConflictException'),
    HttpException: require('./HttpException'),
    HttpExpectationFailedException: require('./HttpExpectationFailedException'),
    HttpFailedDependencyException: require('./HttpFailedDependencyException'),
    HttpForbiddenException: require('./HttpForbiddenException'),
    HttpGatewayTimeoutException: require('./HttpGatewayTimeoutException'),
    HttpGoneException: require('./HttpGoneException'),
    HttpHttpVersionNotSupportedException: require('./HttpHttpVersionNotSupportedException'),
    HttpInsufficientStorageException: require('./HttpInsufficientStorageException'),
    HttpInternalServerErrorException: require('./HttpInternalServerErrorException'),
    HttpLengthRequiredException: require('./HttpLengthRequiredException'),
    HttpLockedException: require('./HttpLockedException'),
    HttpMethodNotAllowedException: require('./HttpMethodNotAllowedException'),
    HttpNotAcceptableException: require('./HttpNotAcceptableException'),
    HttpNotExtendedException: require('./HttpNotExtendedException'),
    HttpNotFoundException: require('./HttpNotFoundException'),
    HttpNotImplementedException: require('./HttpNotImplementedException'),
    HttpPaymentRequiredException: require('./HttpPaymentRequiredException'),
    HttpPreconditionFailedException: require('./HttpPreconditionFailedException'),
    HttpProxyAuthenticationRequiredException: require('./HttpProxyAuthenticationRequiredException'),
    HttpRequestEntityTooLargeException: require('./HttpRequestEntityTooLargeException'),
    HttpRequestTimeoutException: require('./HttpRequestTimeoutException'),
    HttpRequestUriTooLongException: require('./HttpRequestUriTooLongException'),
    HttpRequestedRangeNotSatisfiableException: require('./HttpRequestedRangeNotSatisfiableException'),
    HttpServiceUnavailableException: require('./HttpServiceUnavailableException'),
    HttpUnauthorizedException: require('./HttpUnauthorizedException'),
    HttpUnprocessableEntityException: require('./HttpUnprocessableEntityException'),
    HttpUnsupportedMediaTypeException: require('./HttpUnsupportedMediaTypeException'),
    HttpUpgradeRequiredException: require('./HttpUpgradeRequiredException'),
    HttpVariantAlsoNegotiatesException: require('./HttpVariantAlsoNegotiatesException'),
    SaklientException: require('./SaklientException')
};
