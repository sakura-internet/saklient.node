/// <reference path="../../node.d.ts" />

export = ExceptionFactory;

import Util = require('../Util');
import HttpException = require('./HttpException');
import HttpBadGatewayException = require('./HttpBadGatewayException');
import HttpBadRequestException = require('./HttpBadRequestException');
import HttpConflictException = require('./HttpConflictException');
import HttpExpectationFailedException = require('./HttpExpectationFailedException');
import HttpFailedDependencyException = require('./HttpFailedDependencyException');
import HttpForbiddenException = require('./HttpForbiddenException');
import HttpGatewayTimeoutException = require('./HttpGatewayTimeoutException');
import HttpGoneException = require('./HttpGoneException');
import HttpHttpVersionNotSupportedException = require('./HttpHttpVersionNotSupportedException');
import HttpInsufficientStorageException = require('./HttpInsufficientStorageException');
import HttpInternalServerErrorException = require('./HttpInternalServerErrorException');
import HttpLengthRequiredException = require('./HttpLengthRequiredException');
import HttpLockedException = require('./HttpLockedException');
import HttpMethodNotAllowedException = require('./HttpMethodNotAllowedException');
import HttpNotAcceptableException = require('./HttpNotAcceptableException');
import HttpNotExtendedException = require('./HttpNotExtendedException');
import HttpNotFoundException = require('./HttpNotFoundException');
import HttpNotImplementedException = require('./HttpNotImplementedException');
import HttpPaymentRequiredException = require('./HttpPaymentRequiredException');
import HttpPreconditionFailedException = require('./HttpPreconditionFailedException');
import HttpProxyAuthenticationRequiredException = require('./HttpProxyAuthenticationRequiredException');
import HttpRequestEntityTooLargeException = require('./HttpRequestEntityTooLargeException');
import HttpRequestTimeoutException = require('./HttpRequestTimeoutException');
import HttpRequestUriTooLongException = require('./HttpRequestUriTooLongException');
import HttpRequestedRangeNotSatisfiableException = require('./HttpRequestedRangeNotSatisfiableException');
import HttpServiceUnavailableException = require('./HttpServiceUnavailableException');
import HttpUnauthorizedException = require('./HttpUnauthorizedException');
import HttpUnprocessableEntityException = require('./HttpUnprocessableEntityException');
import HttpUnsupportedMediaTypeException = require('./HttpUnsupportedMediaTypeException');
import HttpUpgradeRequiredException = require('./HttpUpgradeRequiredException');
import HttpVariantAlsoNegotiatesException = require('./HttpVariantAlsoNegotiatesException');
import AccessApiKeyDisabledException = require('../cloud/errors/AccessApiKeyDisabledException');
import AccessSakuraException = require('../cloud/errors/AccessSakuraException');
import AccessStaffException = require('../cloud/errors/AccessStaffException');
import AccessTokenException = require('../cloud/errors/AccessTokenException');
import AccessXhrOrApiKeyException = require('../cloud/errors/AccessXhrOrApiKeyException');
import AccountNotFoundException = require('../cloud/errors/AccountNotFoundException');
import AccountNotSpecifiedException = require('../cloud/errors/AccountNotSpecifiedException');
import AmbiguousIdentifierException = require('../cloud/errors/AmbiguousIdentifierException');
import AmbiguousZoneException = require('../cloud/errors/AmbiguousZoneException');
import ApiProxyTimeoutException = require('../cloud/errors/ApiProxyTimeoutException');
import ApiProxyTimeoutNonGetException = require('../cloud/errors/ApiProxyTimeoutNonGetException');
import ArchiveIsIncompleteException = require('../cloud/errors/ArchiveIsIncompleteException');
import BootFailureByLockException = require('../cloud/errors/BootFailureByLockException');
import BootFailureInGroupException = require('../cloud/errors/BootFailureInGroupException');
import BusyException = require('../cloud/errors/BusyException');
import CantResizeSmallerException = require('../cloud/errors/CantResizeSmallerException');
import CdromDeviceLockedException = require('../cloud/errors/CdromDeviceLockedException');
import CdromDisabledException = require('../cloud/errors/CdromDisabledException');
import CdromInUseException = require('../cloud/errors/CdromInUseException');
import CdromIsIncompleteException = require('../cloud/errors/CdromIsIncompleteException');
import ConnectToSameSwitchException = require('../cloud/errors/ConnectToSameSwitchException');
import ContractCreationException = require('../cloud/errors/ContractCreationException');
import CopyToItselfException = require('../cloud/errors/CopyToItselfException');
import DeleteDiskB4TemplateException = require('../cloud/errors/DeleteDiskB4TemplateException');
import DeleteIpV6NetsFirstException = require('../cloud/errors/DeleteIpV6NetsFirstException');
import DeleteResB4AccountException = require('../cloud/errors/DeleteResB4AccountException');
import DeleteRouterB4SwitchException = require('../cloud/errors/DeleteRouterB4SwitchException');
import DeleteStaticRouteFirstException = require('../cloud/errors/DeleteStaticRouteFirstException');
import DisconnectB4DeleteException = require('../cloud/errors/DisconnectB4DeleteException');
import DisconnectB4UpdateException = require('../cloud/errors/DisconnectB4UpdateException');
import DiskConnectionLimitException = require('../cloud/errors/DiskConnectionLimitException');
import DiskIsCopyingException = require('../cloud/errors/DiskIsCopyingException');
import DiskIsNotAvailableException = require('../cloud/errors/DiskIsNotAvailableException');
import DiskLicenseMismatchException = require('../cloud/errors/DiskLicenseMismatchException');
import DiskOrSsInMigrationException = require('../cloud/errors/DiskOrSsInMigrationException');
import DiskStockRunOutException = require('../cloud/errors/DiskStockRunOutException');
import DnsARecordNotFoundException = require('../cloud/errors/DnsARecordNotFoundException');
import DnsAaaaRecordNotFoundException = require('../cloud/errors/DnsAaaaRecordNotFoundException');
import DnsPtrUpdateFailureException = require('../cloud/errors/DnsPtrUpdateFailureException');
import DuplicateAccountCodeException = require('../cloud/errors/DuplicateAccountCodeException');
import DuplicateEntryException = require('../cloud/errors/DuplicateEntryException');
import DuplicateUserCodeException = require('../cloud/errors/DuplicateUserCodeException');
import FileNotUploadedException = require('../cloud/errors/FileNotUploadedException');
import FilterArrayComparisonException = require('../cloud/errors/FilterArrayComparisonException');
import FilterBadOperatorException = require('../cloud/errors/FilterBadOperatorException');
import FilterNullComparisonException = require('../cloud/errors/FilterNullComparisonException');
import FilterUnknownOperatorException = require('../cloud/errors/FilterUnknownOperatorException');
import FtpCannotCloseException = require('../cloud/errors/FtpCannotCloseException');
import FtpIsAlreadyCloseException = require('../cloud/errors/FtpIsAlreadyCloseException');
import FtpIsAlreadyOpenException = require('../cloud/errors/FtpIsAlreadyOpenException');
import FtpMustBeClosedException = require('../cloud/errors/FtpMustBeClosedException');
import HostOperationFailureException = require('../cloud/errors/HostOperationFailureException');
import IllegalDasUsageException = require('../cloud/errors/IllegalDasUsageException');
import InMigrationException = require('../cloud/errors/InMigrationException');
import InvalidFormatException = require('../cloud/errors/InvalidFormatException');
import InvalidParamCombException = require('../cloud/errors/InvalidParamCombException');
import InvalidRangeException = require('../cloud/errors/InvalidRangeException');
import InvalidUriArgumentException = require('../cloud/errors/InvalidUriArgumentException');
import IpV6NetAlreadyAttachedException = require('../cloud/errors/IpV6NetAlreadyAttachedException');
import LimitCountInAccountException = require('../cloud/errors/LimitCountInAccountException');
import LimitCountInMemberException = require('../cloud/errors/LimitCountInMemberException');
import LimitCountInNetworkException = require('../cloud/errors/LimitCountInNetworkException');
import LimitCountInRouterException = require('../cloud/errors/LimitCountInRouterException');
import LimitCountInZoneException = require('../cloud/errors/LimitCountInZoneException');
import LimitMemoryInAccountException = require('../cloud/errors/LimitMemoryInAccountException');
import LimitSizeInAccountException = require('../cloud/errors/LimitSizeInAccountException');
import MissingIsoImageException = require('../cloud/errors/MissingIsoImageException');
import MissingParamException = require('../cloud/errors/MissingParamException');
import MustBeOfSameZoneException = require('../cloud/errors/MustBeOfSameZoneException');
import NoDisplayResponseException = require('../cloud/errors/NoDisplayResponseException');
import NotForRouterException = require('../cloud/errors/NotForRouterException');
import NotReplicatingException = require('../cloud/errors/NotReplicatingException');
import NotWithHybridconnException = require('../cloud/errors/NotWithHybridconnException');
import OldStoragePlanException = require('../cloud/errors/OldStoragePlanException');
import OperationFailureException = require('../cloud/errors/OperationFailureException');
import OperationTimeoutException = require('../cloud/errors/OperationTimeoutException');
import OriginalHashMismatchException = require('../cloud/errors/OriginalHashMismatchException');
import PacketFilterApplyingException = require('../cloud/errors/PacketFilterApplyingException');
import PacketFilterVersionMismatchException = require('../cloud/errors/PacketFilterVersionMismatchException');
import ParamIpNotFoundException = require('../cloud/errors/ParamIpNotFoundException');
import ParamResNotFoundException = require('../cloud/errors/ParamResNotFoundException');
import PaymentCreditCardException = require('../cloud/errors/PaymentCreditCardException');
import PaymentPaymentException = require('../cloud/errors/PaymentPaymentException');
import PaymentRegistrationException = require('../cloud/errors/PaymentRegistrationException');
import PaymentTelCertificationException = require('../cloud/errors/PaymentTelCertificationException');
import PaymentUnpayableException = require('../cloud/errors/PaymentUnpayableException');
import PenaltyOperationException = require('../cloud/errors/PenaltyOperationException');
import ReplicaAlreadyExistsException = require('../cloud/errors/ReplicaAlreadyExistsException');
import ReplicaNotFoundException = require('../cloud/errors/ReplicaNotFoundException');
import ResAlreadyConnectedException = require('../cloud/errors/ResAlreadyConnectedException');
import ResAlreadyDisconnectedException = require('../cloud/errors/ResAlreadyDisconnectedException');
import ResAlreadyExistsException = require('../cloud/errors/ResAlreadyExistsException');
import ResUsedInZoneException = require('../cloud/errors/ResUsedInZoneException');
import ResourcePathNotFoundException = require('../cloud/errors/ResourcePathNotFoundException');
import RunOutOfIpAddressException = require('../cloud/errors/RunOutOfIpAddressException');
import SameLicenseRequiredException = require('../cloud/errors/SameLicenseRequiredException');
import ServerCouldNotStopException = require('../cloud/errors/ServerCouldNotStopException');
import ServerIsCleaningException = require('../cloud/errors/ServerIsCleaningException');
import ServerOperationFailureException = require('../cloud/errors/ServerOperationFailureException');
import ServerPowerMustBeDownException = require('../cloud/errors/ServerPowerMustBeDownException');
import ServerPowerMustBeUpException = require('../cloud/errors/ServerPowerMustBeUpException');
import ServiceTemporarilyUnavailableException = require('../cloud/errors/ServiceTemporarilyUnavailableException');
import SizeMismatchException = require('../cloud/errors/SizeMismatchException');
import SnapshotInMigrationException = require('../cloud/errors/SnapshotInMigrationException');
import StillCreatingException = require('../cloud/errors/StillCreatingException');
import StorageAbnormalException = require('../cloud/errors/StorageAbnormalException');
import StorageOperationFailureException = require('../cloud/errors/StorageOperationFailureException');
import SwitchHybridConnectedException = require('../cloud/errors/SwitchHybridConnectedException');
import TemplateFtpIsOpenException = require('../cloud/errors/TemplateFtpIsOpenException');
import TemplateIsIncompleteException = require('../cloud/errors/TemplateIsIncompleteException');
import TooManyRequestException = require('../cloud/errors/TooManyRequestException');
import UnknownException = require('../cloud/errors/UnknownException');
import UnknownOsTypeException = require('../cloud/errors/UnknownOsTypeException');
import UnsupportedResClassException = require('../cloud/errors/UnsupportedResClassException');
import UserNotSpecifiedException = require('../cloud/errors/UserNotSpecifiedException');
import VncProxyRequestFailureException = require('../cloud/errors/VncProxyRequestFailureException');

'use strict';

/**
 * @class ExceptionFactory
 * @constructor
 */
class ExceptionFactory {
	
	/**
	 * @static
	 * @method create
	 * @public
	 * @param {number} status
	 * @param {string} code=null
	 * @param {string} message=""
	 * @return {HttpException}
	 */
	static create(status:number, code:string=null, message:string="") : HttpException {
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
	}
	
}

