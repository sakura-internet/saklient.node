
var Util = require('../Util');
var HttpException = require('./HttpException');
var HttpBadGatewayException = require('./HttpBadGatewayException');
var HttpBadRequestException = require('./HttpBadRequestException');
var HttpConflictException = require('./HttpConflictException');
var HttpExpectationFailedException = require('./HttpExpectationFailedException');
var HttpFailedDependencyException = require('./HttpFailedDependencyException');
var HttpForbiddenException = require('./HttpForbiddenException');
var HttpGatewayTimeoutException = require('./HttpGatewayTimeoutException');
var HttpGoneException = require('./HttpGoneException');
var HttpHttpVersionNotSupportedException = require('./HttpHttpVersionNotSupportedException');
var HttpInsufficientStorageException = require('./HttpInsufficientStorageException');
var HttpInternalServerErrorException = require('./HttpInternalServerErrorException');
var HttpLengthRequiredException = require('./HttpLengthRequiredException');
var HttpLockedException = require('./HttpLockedException');
var HttpMethodNotAllowedException = require('./HttpMethodNotAllowedException');
var HttpNotAcceptableException = require('./HttpNotAcceptableException');
var HttpNotExtendedException = require('./HttpNotExtendedException');
var HttpNotFoundException = require('./HttpNotFoundException');
var HttpNotImplementedException = require('./HttpNotImplementedException');
var HttpPaymentRequiredException = require('./HttpPaymentRequiredException');
var HttpPreconditionFailedException = require('./HttpPreconditionFailedException');
var HttpProxyAuthenticationRequiredException = require('./HttpProxyAuthenticationRequiredException');
var HttpRequestEntityTooLargeException = require('./HttpRequestEntityTooLargeException');
var HttpRequestTimeoutException = require('./HttpRequestTimeoutException');
var HttpRequestUriTooLongException = require('./HttpRequestUriTooLongException');
var HttpRequestedRangeNotSatisfiableException = require('./HttpRequestedRangeNotSatisfiableException');
var HttpServiceUnavailableException = require('./HttpServiceUnavailableException');
var HttpUnauthorizedException = require('./HttpUnauthorizedException');
var HttpUnprocessableEntityException = require('./HttpUnprocessableEntityException');
var HttpUnsupportedMediaTypeException = require('./HttpUnsupportedMediaTypeException');
var HttpUpgradeRequiredException = require('./HttpUpgradeRequiredException');
var HttpVariantAlsoNegotiatesException = require('./HttpVariantAlsoNegotiatesException');
var AccessApiKeyDisabledException = require('../cloud/errors/AccessApiKeyDisabledException');
var AccessSakuraException = require('../cloud/errors/AccessSakuraException');
var AccessStaffException = require('../cloud/errors/AccessStaffException');
var AccessTokenException = require('../cloud/errors/AccessTokenException');
var AccessXhrOrApiKeyException = require('../cloud/errors/AccessXhrOrApiKeyException');
var AccountNotFoundException = require('../cloud/errors/AccountNotFoundException');
var AccountNotSpecifiedException = require('../cloud/errors/AccountNotSpecifiedException');
var AmbiguousIdentifierException = require('../cloud/errors/AmbiguousIdentifierException');
var AmbiguousZoneException = require('../cloud/errors/AmbiguousZoneException');
var ApiProxyTimeoutException = require('../cloud/errors/ApiProxyTimeoutException');
var ApiProxyTimeoutNonGetException = require('../cloud/errors/ApiProxyTimeoutNonGetException');
var ArchiveIsIncompleteException = require('../cloud/errors/ArchiveIsIncompleteException');
var BootFailureByLockException = require('../cloud/errors/BootFailureByLockException');
var BootFailureInGroupException = require('../cloud/errors/BootFailureInGroupException');
var BusyException = require('../cloud/errors/BusyException');
var CantResizeSmallerException = require('../cloud/errors/CantResizeSmallerException');
var CdromDeviceLockedException = require('../cloud/errors/CdromDeviceLockedException');
var CdromDisabledException = require('../cloud/errors/CdromDisabledException');
var CdromInUseException = require('../cloud/errors/CdromInUseException');
var CdromIsIncompleteException = require('../cloud/errors/CdromIsIncompleteException');
var ConnectToSameSwitchException = require('../cloud/errors/ConnectToSameSwitchException');
var ContractCreationException = require('../cloud/errors/ContractCreationException');
var CopyToItselfException = require('../cloud/errors/CopyToItselfException');
var DeleteDiskB4TemplateException = require('../cloud/errors/DeleteDiskB4TemplateException');
var DeleteIpV6NetsFirstException = require('../cloud/errors/DeleteIpV6NetsFirstException');
var DeleteResB4AccountException = require('../cloud/errors/DeleteResB4AccountException');
var DeleteRouterB4SwitchException = require('../cloud/errors/DeleteRouterB4SwitchException');
var DeleteStaticRouteFirstException = require('../cloud/errors/DeleteStaticRouteFirstException');
var DisconnectB4DeleteException = require('../cloud/errors/DisconnectB4DeleteException');
var DisconnectB4UpdateException = require('../cloud/errors/DisconnectB4UpdateException');
var DiskConnectionLimitException = require('../cloud/errors/DiskConnectionLimitException');
var DiskIsCopyingException = require('../cloud/errors/DiskIsCopyingException');
var DiskIsNotAvailableException = require('../cloud/errors/DiskIsNotAvailableException');
var DiskLicenseMismatchException = require('../cloud/errors/DiskLicenseMismatchException');
var DiskOrSsInMigrationException = require('../cloud/errors/DiskOrSsInMigrationException');
var DiskStockRunOutException = require('../cloud/errors/DiskStockRunOutException');
var DnsARecordNotFoundException = require('../cloud/errors/DnsARecordNotFoundException');
var DnsAaaaRecordNotFoundException = require('../cloud/errors/DnsAaaaRecordNotFoundException');
var DnsPtrUpdateFailureException = require('../cloud/errors/DnsPtrUpdateFailureException');
var DuplicateAccountCodeException = require('../cloud/errors/DuplicateAccountCodeException');
var DuplicateEntryException = require('../cloud/errors/DuplicateEntryException');
var DuplicateUserCodeException = require('../cloud/errors/DuplicateUserCodeException');
var FileNotUploadedException = require('../cloud/errors/FileNotUploadedException');
var FilterArrayComparisonException = require('../cloud/errors/FilterArrayComparisonException');
var FilterBadOperatorException = require('../cloud/errors/FilterBadOperatorException');
var FilterNullComparisonException = require('../cloud/errors/FilterNullComparisonException');
var FilterUnknownOperatorException = require('../cloud/errors/FilterUnknownOperatorException');
var FtpCannotCloseException = require('../cloud/errors/FtpCannotCloseException');
var FtpIsAlreadyCloseException = require('../cloud/errors/FtpIsAlreadyCloseException');
var FtpIsAlreadyOpenException = require('../cloud/errors/FtpIsAlreadyOpenException');
var FtpMustBeClosedException = require('../cloud/errors/FtpMustBeClosedException');
var HostOperationFailureException = require('../cloud/errors/HostOperationFailureException');
var IllegalDasUsageException = require('../cloud/errors/IllegalDasUsageException');
var InMigrationException = require('../cloud/errors/InMigrationException');
var InvalidFormatException = require('../cloud/errors/InvalidFormatException');
var InvalidParamCombException = require('../cloud/errors/InvalidParamCombException');
var InvalidRangeException = require('../cloud/errors/InvalidRangeException');
var InvalidUriArgumentException = require('../cloud/errors/InvalidUriArgumentException');
var IpV6NetAlreadyAttachedException = require('../cloud/errors/IpV6NetAlreadyAttachedException');
var LimitCountInAccountException = require('../cloud/errors/LimitCountInAccountException');
var LimitCountInMemberException = require('../cloud/errors/LimitCountInMemberException');
var LimitCountInNetworkException = require('../cloud/errors/LimitCountInNetworkException');
var LimitCountInRouterException = require('../cloud/errors/LimitCountInRouterException');
var LimitCountInZoneException = require('../cloud/errors/LimitCountInZoneException');
var LimitMemoryInAccountException = require('../cloud/errors/LimitMemoryInAccountException');
var LimitSizeInAccountException = require('../cloud/errors/LimitSizeInAccountException');
var MissingIsoImageException = require('../cloud/errors/MissingIsoImageException');
var MissingParamException = require('../cloud/errors/MissingParamException');
var MustBeOfSameZoneException = require('../cloud/errors/MustBeOfSameZoneException');
var NoDisplayResponseException = require('../cloud/errors/NoDisplayResponseException');
var NotForRouterException = require('../cloud/errors/NotForRouterException');
var NotReplicatingException = require('../cloud/errors/NotReplicatingException');
var NotWithHybridconnException = require('../cloud/errors/NotWithHybridconnException');
var OldStoragePlanException = require('../cloud/errors/OldStoragePlanException');
var OperationFailureException = require('../cloud/errors/OperationFailureException');
var OperationTimeoutException = require('../cloud/errors/OperationTimeoutException');
var OriginalHashMismatchException = require('../cloud/errors/OriginalHashMismatchException');
var PacketFilterApplyingException = require('../cloud/errors/PacketFilterApplyingException');
var PacketFilterVersionMismatchException = require('../cloud/errors/PacketFilterVersionMismatchException');
var ParamIpNotFoundException = require('../cloud/errors/ParamIpNotFoundException');
var ParamResNotFoundException = require('../cloud/errors/ParamResNotFoundException');
var PaymentCreditCardException = require('../cloud/errors/PaymentCreditCardException');
var PaymentPaymentException = require('../cloud/errors/PaymentPaymentException');
var PaymentRegistrationException = require('../cloud/errors/PaymentRegistrationException');
var PaymentTelCertificationException = require('../cloud/errors/PaymentTelCertificationException');
var PaymentUnpayableException = require('../cloud/errors/PaymentUnpayableException');
var PenaltyOperationException = require('../cloud/errors/PenaltyOperationException');
var ReplicaAlreadyExistsException = require('../cloud/errors/ReplicaAlreadyExistsException');
var ReplicaNotFoundException = require('../cloud/errors/ReplicaNotFoundException');
var ResAlreadyConnectedException = require('../cloud/errors/ResAlreadyConnectedException');
var ResAlreadyDisconnectedException = require('../cloud/errors/ResAlreadyDisconnectedException');
var ResAlreadyExistsException = require('../cloud/errors/ResAlreadyExistsException');
var ResUsedInZoneException = require('../cloud/errors/ResUsedInZoneException');
var ResourcePathNotFoundException = require('../cloud/errors/ResourcePathNotFoundException');
var RunOutOfIpAddressException = require('../cloud/errors/RunOutOfIpAddressException');
var SameLicenseRequiredException = require('../cloud/errors/SameLicenseRequiredException');
var ServerCouldNotStopException = require('../cloud/errors/ServerCouldNotStopException');
var ServerIsCleaningException = require('../cloud/errors/ServerIsCleaningException');
var ServerOperationFailureException = require('../cloud/errors/ServerOperationFailureException');
var ServerPowerMustBeDownException = require('../cloud/errors/ServerPowerMustBeDownException');
var ServerPowerMustBeUpException = require('../cloud/errors/ServerPowerMustBeUpException');
var ServiceTemporarilyUnavailableException = require('../cloud/errors/ServiceTemporarilyUnavailableException');
var SizeMismatchException = require('../cloud/errors/SizeMismatchException');
var SnapshotInMigrationException = require('../cloud/errors/SnapshotInMigrationException');
var StillCreatingException = require('../cloud/errors/StillCreatingException');
var StorageAbnormalException = require('../cloud/errors/StorageAbnormalException');
var StorageOperationFailureException = require('../cloud/errors/StorageOperationFailureException');
var SwitchHybridConnectedException = require('../cloud/errors/SwitchHybridConnectedException');
var TemplateFtpIsOpenException = require('../cloud/errors/TemplateFtpIsOpenException');
var TemplateIsIncompleteException = require('../cloud/errors/TemplateIsIncompleteException');
var TooManyRequestException = require('../cloud/errors/TooManyRequestException');
var UnknownException = require('../cloud/errors/UnknownException');
var UnknownOsTypeException = require('../cloud/errors/UnknownOsTypeException');
var UnsupportedResClassException = require('../cloud/errors/UnsupportedResClassException');
var UserNotSpecifiedException = require('../cloud/errors/UserNotSpecifiedException');
var VncProxyRequestFailureException = require('../cloud/errors/VncProxyRequestFailureException');

/**
* @class ExceptionFactory
* @constructor
*/
var ExceptionFactory = (function () {
    function ExceptionFactory() {
    }
    /**
    * @static
    * @method create
    * @public
    * @param {number} status
    * @param {string} message=""
    * @param {string} code=null
    * @return {HttpException}
    */
    ExceptionFactory.create = function (status, code, message) {
        if (typeof code === "undefined") { code = null; }
        if (typeof message === "undefined") { message = ""; }
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(status, "number");
        Util.validateType(code, "string");
        Util.validateType(message, "string");
        switch (code) {
            case "access_apikey_disabled": {
                return new AccessApiKeyDisabledException(status, code, message);
            }
            case "access_sakura": {
                return new AccessSakuraException(status, code, message);
            }
            case "access_staff": {
                return new AccessStaffException(status, code, message);
            }
            case "access_token": {
                return new AccessTokenException(status, code, message);
            }
            case "access_xhr_or_apikey": {
                return new AccessXhrOrApiKeyException(status, code, message);
            }
            case "account_not_found": {
                return new AccountNotFoundException(status, code, message);
            }
            case "account_not_specified": {
                return new AccountNotSpecifiedException(status, code, message);
            }
            case "ambiguous_identifier": {
                return new AmbiguousIdentifierException(status, code, message);
            }
            case "ambiguous_zone": {
                return new AmbiguousZoneException(status, code, message);
            }
            case "apiproxy_timeout": {
                return new ApiProxyTimeoutException(status, code, message);
            }
            case "apiproxy_timeout_non_get": {
                return new ApiProxyTimeoutNonGetException(status, code, message);
            }
            case "archive_is_incomplete": {
                return new ArchiveIsIncompleteException(status, code, message);
            }
            case "bad_gateway": {
                return new HttpBadGatewayException(status, code, message);
            }
            case "bad_request": {
                return new HttpBadRequestException(status, code, message);
            }
            case "boot_failure_by_lock": {
                return new BootFailureByLockException(status, code, message);
            }
            case "boot_failure_in_group": {
                return new BootFailureInGroupException(status, code, message);
            }
            case "busy": {
                return new BusyException(status, code, message);
            }
            case "cant_resize_smaller": {
                return new CantResizeSmallerException(status, code, message);
            }
            case "cdrom_device_locked": {
                return new CdromDeviceLockedException(status, code, message);
            }
            case "cdrom_disabled": {
                return new CdromDisabledException(status, code, message);
            }
            case "cdrom_in_use": {
                return new CdromInUseException(status, code, message);
            }
            case "cdrom_is_incomplete": {
                return new CdromIsIncompleteException(status, code, message);
            }
            case "conflict": {
                return new HttpConflictException(status, code, message);
            }
            case "connect_to_same_switch": {
                return new ConnectToSameSwitchException(status, code, message);
            }
            case "contract_creation": {
                return new ContractCreationException(status, code, message);
            }
            case "copy_to_itself": {
                return new CopyToItselfException(status, code, message);
            }
            case "delete_disk_b4_template": {
                return new DeleteDiskB4TemplateException(status, code, message);
            }
            case "delete_ipv6nets_first": {
                return new DeleteIpV6NetsFirstException(status, code, message);
            }
            case "delete_res_b4_account": {
                return new DeleteResB4AccountException(status, code, message);
            }
            case "delete_router_b4_switch": {
                return new DeleteRouterB4SwitchException(status, code, message);
            }
            case "delete_static_route_first": {
                return new DeleteStaticRouteFirstException(status, code, message);
            }
            case "disconnect_b4_delete": {
                return new DisconnectB4DeleteException(status, code, message);
            }
            case "disconnect_b4_update": {
                return new DisconnectB4UpdateException(status, code, message);
            }
            case "disk_connection_limit": {
                return new DiskConnectionLimitException(status, code, message);
            }
            case "disk_is_copying": {
                return new DiskIsCopyingException(status, code, message);
            }
            case "disk_is_not_available": {
                return new DiskIsNotAvailableException(status, code, message);
            }
            case "disk_license_mismatch": {
                return new DiskLicenseMismatchException(status, code, message);
            }
            case "disk_stock_run_out": {
                return new DiskStockRunOutException(status, code, message);
            }
            case "diskorss_in_migration": {
                return new DiskOrSsInMigrationException(status, code, message);
            }
            case "dns_a_record_not_found": {
                return new DnsARecordNotFoundException(status, code, message);
            }
            case "dns_aaaa_record_not_found": {
                return new DnsAaaaRecordNotFoundException(status, code, message);
            }
            case "dns_ptr_update_failure": {
                return new DnsPtrUpdateFailureException(status, code, message);
            }
            case "duplicate_account_code": {
                return new DuplicateAccountCodeException(status, code, message);
            }
            case "duplicate_entry": {
                return new DuplicateEntryException(status, code, message);
            }
            case "duplicate_user_code": {
                return new DuplicateUserCodeException(status, code, message);
            }
            case "expectation_failed": {
                return new HttpExpectationFailedException(status, code, message);
            }
            case "failed_dependency": {
                return new HttpFailedDependencyException(status, code, message);
            }
            case "file_not_uploaded": {
                return new FileNotUploadedException(status, code, message);
            }
            case "filter_array_comparison": {
                return new FilterArrayComparisonException(status, code, message);
            }
            case "filter_bad_operator": {
                return new FilterBadOperatorException(status, code, message);
            }
            case "filter_null_comparison": {
                return new FilterNullComparisonException(status, code, message);
            }
            case "filter_unknown_operator": {
                return new FilterUnknownOperatorException(status, code, message);
            }
            case "forbidden": {
                return new HttpForbiddenException(status, code, message);
            }
            case "ftp_cannot_close": {
                return new FtpCannotCloseException(status, code, message);
            }
            case "ftp_is_already_close": {
                return new FtpIsAlreadyCloseException(status, code, message);
            }
            case "ftp_is_already_open": {
                return new FtpIsAlreadyOpenException(status, code, message);
            }
            case "ftp_must_be_closed": {
                return new FtpMustBeClosedException(status, code, message);
            }
            case "gateway_timeout": {
                return new HttpGatewayTimeoutException(status, code, message);
            }
            case "gone": {
                return new HttpGoneException(status, code, message);
            }
            case "host_operation_failure": {
                return new HostOperationFailureException(status, code, message);
            }
            case "http_version_not_supported": {
                return new HttpHttpVersionNotSupportedException(status, code, message);
            }
            case "illegal_das_usage": {
                return new IllegalDasUsageException(status, code, message);
            }
            case "in_migration": {
                return new InMigrationException(status, code, message);
            }
            case "insufficient_storage": {
                return new HttpInsufficientStorageException(status, code, message);
            }
            case "internal_server_error": {
                return new HttpInternalServerErrorException(status, code, message);
            }
            case "invalid_format": {
                return new InvalidFormatException(status, code, message);
            }
            case "invalid_param_comb": {
                return new InvalidParamCombException(status, code, message);
            }
            case "invalid_range": {
                return new InvalidRangeException(status, code, message);
            }
            case "invalid_uri_argument": {
                return new InvalidUriArgumentException(status, code, message);
            }
            case "ipv6net_already_attached": {
                return new IpV6NetAlreadyAttachedException(status, code, message);
            }
            case "length_required": {
                return new HttpLengthRequiredException(status, code, message);
            }
            case "limit_count_in_account": {
                return new LimitCountInAccountException(status, code, message);
            }
            case "limit_count_in_member": {
                return new LimitCountInMemberException(status, code, message);
            }
            case "limit_count_in_network": {
                return new LimitCountInNetworkException(status, code, message);
            }
            case "limit_count_in_router": {
                return new LimitCountInRouterException(status, code, message);
            }
            case "limit_count_in_zone": {
                return new LimitCountInZoneException(status, code, message);
            }
            case "limit_memory_in_account": {
                return new LimitMemoryInAccountException(status, code, message);
            }
            case "limit_size_in_account": {
                return new LimitSizeInAccountException(status, code, message);
            }
            case "locked": {
                return new HttpLockedException(status, code, message);
            }
            case "method_not_allowed": {
                return new HttpMethodNotAllowedException(status, code, message);
            }
            case "missing_iso_image": {
                return new MissingIsoImageException(status, code, message);
            }
            case "missing_param": {
                return new MissingParamException(status, code, message);
            }
            case "must_be_of_same_zone": {
                return new MustBeOfSameZoneException(status, code, message);
            }
            case "no_display_response": {
                return new NoDisplayResponseException(status, code, message);
            }
            case "not_acceptable": {
                return new HttpNotAcceptableException(status, code, message);
            }
            case "not_extended": {
                return new HttpNotExtendedException(status, code, message);
            }
            case "not_for_router": {
                return new NotForRouterException(status, code, message);
            }
            case "not_found": {
                return new HttpNotFoundException(status, code, message);
            }
            case "not_implemented": {
                return new HttpNotImplementedException(status, code, message);
            }
            case "not_replicating": {
                return new NotReplicatingException(status, code, message);
            }
            case "not_with_hybridconn": {
                return new NotWithHybridconnException(status, code, message);
            }
            case "old_storage_plan": {
                return new OldStoragePlanException(status, code, message);
            }
            case "operation_failure": {
                return new OperationFailureException(status, code, message);
            }
            case "operation_timeout": {
                return new OperationTimeoutException(status, code, message);
            }
            case "original_hash_mismatch": {
                return new OriginalHashMismatchException(status, code, message);
            }
            case "packetfilter_applying": {
                return new PacketFilterApplyingException(status, code, message);
            }
            case "packetfilter_version_mismatch": {
                return new PacketFilterVersionMismatchException(status, code, message);
            }
            case "param_ip_not_found": {
                return new ParamIpNotFoundException(status, code, message);
            }
            case "param_res_not_found": {
                return new ParamResNotFoundException(status, code, message);
            }
            case "payment_creditcard": {
                return new PaymentCreditCardException(status, code, message);
            }
            case "payment_payment": {
                return new PaymentPaymentException(status, code, message);
            }
            case "payment_registration": {
                return new PaymentRegistrationException(status, code, message);
            }
            case "payment_required": {
                return new HttpPaymentRequiredException(status, code, message);
            }
            case "payment_telcertification": {
                return new PaymentTelCertificationException(status, code, message);
            }
            case "payment_unpayable": {
                return new PaymentUnpayableException(status, code, message);
            }
            case "penalty_operation": {
                return new PenaltyOperationException(status, code, message);
            }
            case "precondition_failed": {
                return new HttpPreconditionFailedException(status, code, message);
            }
            case "proxy_authentication_required": {
                return new HttpProxyAuthenticationRequiredException(status, code, message);
            }
            case "replica_already_exists": {
                return new ReplicaAlreadyExistsException(status, code, message);
            }
            case "replica_not_found": {
                return new ReplicaNotFoundException(status, code, message);
            }
            case "request_entity_too_large": {
                return new HttpRequestEntityTooLargeException(status, code, message);
            }
            case "request_timeout": {
                return new HttpRequestTimeoutException(status, code, message);
            }
            case "request_uri_too_long": {
                return new HttpRequestUriTooLongException(status, code, message);
            }
            case "requested_range_not_satisfiable": {
                return new HttpRequestedRangeNotSatisfiableException(status, code, message);
            }
            case "res_already_connected": {
                return new ResAlreadyConnectedException(status, code, message);
            }
            case "res_already_disconnected": {
                return new ResAlreadyDisconnectedException(status, code, message);
            }
            case "res_already_exists": {
                return new ResAlreadyExistsException(status, code, message);
            }
            case "res_used_in_zone": {
                return new ResUsedInZoneException(status, code, message);
            }
            case "resource_path_not_found": {
                return new ResourcePathNotFoundException(status, code, message);
            }
            case "run_out_of_ipaddress": {
                return new RunOutOfIpAddressException(status, code, message);
            }
            case "same_license_required": {
                return new SameLicenseRequiredException(status, code, message);
            }
            case "server_could_not_stop": {
                return new ServerCouldNotStopException(status, code, message);
            }
            case "server_is_cleaning": {
                return new ServerIsCleaningException(status, code, message);
            }
            case "server_operation_failure": {
                return new ServerOperationFailureException(status, code, message);
            }
            case "server_power_must_be_down": {
                return new ServerPowerMustBeDownException(status, code, message);
            }
            case "server_power_must_be_up": {
                return new ServerPowerMustBeUpException(status, code, message);
            }
            case "service_temporarily_unavailable": {
                return new ServiceTemporarilyUnavailableException(status, code, message);
            }
            case "service_unavailable": {
                return new HttpServiceUnavailableException(status, code, message);
            }
            case "size_mismatch": {
                return new SizeMismatchException(status, code, message);
            }
            case "snapshot_in_migration": {
                return new SnapshotInMigrationException(status, code, message);
            }
            case "still_creating": {
                return new StillCreatingException(status, code, message);
            }
            case "storage_abnormal": {
                return new StorageAbnormalException(status, code, message);
            }
            case "storage_operation_failure": {
                return new StorageOperationFailureException(status, code, message);
            }
            case "switch_hybrid_connected": {
                return new SwitchHybridConnectedException(status, code, message);
            }
            case "template_ftp_is_open": {
                return new TemplateFtpIsOpenException(status, code, message);
            }
            case "template_is_incomplete": {
                return new TemplateIsIncompleteException(status, code, message);
            }
            case "too_many_request": {
                return new TooManyRequestException(status, code, message);
            }
            case "unauthorized": {
                return new HttpUnauthorizedException(status, code, message);
            }
            case "unknown": {
                return new UnknownException(status, code, message);
            }
            case "unknown_os_type": {
                return new UnknownOsTypeException(status, code, message);
            }
            case "unprocessable_entity": {
                return new HttpUnprocessableEntityException(status, code, message);
            }
            case "unsupported_media_type": {
                return new HttpUnsupportedMediaTypeException(status, code, message);
            }
            case "unsupported_res_class": {
                return new UnsupportedResClassException(status, code, message);
            }
            case "upgrade_required": {
                return new HttpUpgradeRequiredException(status, code, message);
            }
            case "user_not_specified": {
                return new UserNotSpecifiedException(status, code, message);
            }
            case "variant_also_negotiates": {
                return new HttpVariantAlsoNegotiatesException(status, code, message);
            }
            case "vnc_proxy_request_failure": {
                return new VncProxyRequestFailureException(status, code, message);
            }
        }
        ;
        switch (status) {
            case 400: {
                return new HttpBadRequestException(status, code, message);
            }
            case 401: {
                return new HttpUnauthorizedException(status, code, message);
            }
            case 402: {
                return new HttpPaymentRequiredException(status, code, message);
            }
            case 403: {
                return new HttpForbiddenException(status, code, message);
            }
            case 404: {
                return new HttpNotFoundException(status, code, message);
            }
            case 405: {
                return new HttpMethodNotAllowedException(status, code, message);
            }
            case 406: {
                return new HttpNotAcceptableException(status, code, message);
            }
            case 407: {
                return new HttpProxyAuthenticationRequiredException(status, code, message);
            }
            case 408: {
                return new HttpRequestTimeoutException(status, code, message);
            }
            case 409: {
                return new HttpConflictException(status, code, message);
            }
            case 410: {
                return new HttpGoneException(status, code, message);
            }
            case 411: {
                return new HttpLengthRequiredException(status, code, message);
            }
            case 412: {
                return new HttpPreconditionFailedException(status, code, message);
            }
            case 413: {
                return new HttpRequestEntityTooLargeException(status, code, message);
            }
            case 415: {
                return new HttpUnsupportedMediaTypeException(status, code, message);
            }
            case 416: {
                return new HttpRequestedRangeNotSatisfiableException(status, code, message);
            }
            case 417: {
                return new HttpExpectationFailedException(status, code, message);
            }
            case 422: {
                return new HttpUnprocessableEntityException(status, code, message);
            }
            case 423: {
                return new HttpLockedException(status, code, message);
            }
            case 424: {
                return new HttpFailedDependencyException(status, code, message);
            }
            case 426: {
                return new HttpUpgradeRequiredException(status, code, message);
            }
            case 500: {
                return new HttpRequestUriTooLongException(status, code, message);
            }
            case 501: {
                return new HttpNotImplementedException(status, code, message);
            }
            case 502: {
                return new HttpBadGatewayException(status, code, message);
            }
            case 503: {
                return new HttpServiceUnavailableException(status, code, message);
            }
            case 504: {
                return new HttpGatewayTimeoutException(status, code, message);
            }
            case 505: {
                return new HttpHttpVersionNotSupportedException(status, code, message);
            }
            case 506: {
                return new HttpVariantAlsoNegotiatesException(status, code, message);
            }
            case 507: {
                return new HttpInsufficientStorageException(status, code, message);
            }
            case 510: {
                return new HttpNotExtendedException(status, code, message);
            }
        }
        ;
        return new HttpException(status, code, message);
    };
    return ExceptionFactory;
})();
module.exports = ExceptionFactory;
