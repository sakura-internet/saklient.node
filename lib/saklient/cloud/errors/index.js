/**
 * @module saklient.cloud.errors
 */
module.exports = {
    AccessApiKeyDisabledException: require('./AccessApiKeyDisabledException'),
    AccessSakuraException: require('./AccessSakuraException'),
    AccessStaffException: require('./AccessStaffException'),
    AccessTokenException: require('./AccessTokenException'),
    AccessXhrOrApiKeyException: require('./AccessXhrOrApiKeyException'),
    AccountNotFoundException: require('./AccountNotFoundException'),
    AccountNotSpecifiedException: require('./AccountNotSpecifiedException'),
    AmbiguousIdentifierException: require('./AmbiguousIdentifierException'),
    AmbiguousZoneException: require('./AmbiguousZoneException'),
    ApiProxyTimeoutException: require('./ApiProxyTimeoutException'),
    ApiProxyTimeoutNonGetException: require('./ApiProxyTimeoutNonGetException'),
    ArchiveIsIncompleteException: require('./ArchiveIsIncompleteException'),
    BootFailureByLockException: require('./BootFailureByLockException'),
    BootFailureInGroupException: require('./BootFailureInGroupException'),
    BusyException: require('./BusyException'),
    CantResizeSmallerException: require('./CantResizeSmallerException'),
    CdromDeviceLockedException: require('./CdromDeviceLockedException'),
    CdromDisabledException: require('./CdromDisabledException'),
    CdromInUseException: require('./CdromInUseException'),
    CdromIsIncompleteException: require('./CdromIsIncompleteException'),
    ConnectToSameSwitchException: require('./ConnectToSameSwitchException'),
    ContractCreationException: require('./ContractCreationException'),
    CopyToItselfException: require('./CopyToItselfException'),
    DeleteDiskB4TemplateException: require('./DeleteDiskB4TemplateException'),
    DeleteIpV6NetsFirstException: require('./DeleteIpV6NetsFirstException'),
    DeleteResB4AccountException: require('./DeleteResB4AccountException'),
    DeleteRouterB4SwitchException: require('./DeleteRouterB4SwitchException'),
    DeleteStaticRouteFirstException: require('./DeleteStaticRouteFirstException'),
    DisabledInSandboxException: require('./DisabledInSandboxException'),
    DisconnectB4DeleteException: require('./DisconnectB4DeleteException'),
    DisconnectB4UpdateException: require('./DisconnectB4UpdateException'),
    DiskConnectionLimitException: require('./DiskConnectionLimitException'),
    DiskIsCopyingException: require('./DiskIsCopyingException'),
    DiskIsNotAvailableException: require('./DiskIsNotAvailableException'),
    DiskLicenseMismatchException: require('./DiskLicenseMismatchException'),
    DiskOrSsInMigrationException: require('./DiskOrSsInMigrationException'),
    DiskStockRunOutException: require('./DiskStockRunOutException'),
    DnsARecordNotFoundException: require('./DnsARecordNotFoundException'),
    DnsAaaaRecordNotFoundException: require('./DnsAaaaRecordNotFoundException'),
    DnsPtrUpdateFailureException: require('./DnsPtrUpdateFailureException'),
    DontCreateInSandboxException: require('./DontCreateInSandboxException'),
    DuplicateAccountCodeException: require('./DuplicateAccountCodeException'),
    DuplicateEntryException: require('./DuplicateEntryException'),
    DuplicateUserCodeException: require('./DuplicateUserCodeException'),
    FileNotUploadedException: require('./FileNotUploadedException'),
    FilterArrayComparisonException: require('./FilterArrayComparisonException'),
    FilterBadOperatorException: require('./FilterBadOperatorException'),
    FilterNullComparisonException: require('./FilterNullComparisonException'),
    FilterUnknownOperatorException: require('./FilterUnknownOperatorException'),
    FtpCannotCloseException: require('./FtpCannotCloseException'),
    FtpIsAlreadyCloseException: require('./FtpIsAlreadyCloseException'),
    FtpIsAlreadyOpenException: require('./FtpIsAlreadyOpenException'),
    FtpMustBeClosedException: require('./FtpMustBeClosedException'),
    HostOperationFailureException: require('./HostOperationFailureException'),
    IllegalDasUsageException: require('./IllegalDasUsageException'),
    InMigrationException: require('./InMigrationException'),
    InvalidFormatException: require('./InvalidFormatException'),
    InvalidParamCombException: require('./InvalidParamCombException'),
    InvalidRangeException: require('./InvalidRangeException'),
    InvalidUriArgumentException: require('./InvalidUriArgumentException'),
    IpV6NetAlreadyAttachedException: require('./IpV6NetAlreadyAttachedException'),
    LimitCountInAccountException: require('./LimitCountInAccountException'),
    LimitCountInMemberException: require('./LimitCountInMemberException'),
    LimitCountInNetworkException: require('./LimitCountInNetworkException'),
    LimitCountInRouterException: require('./LimitCountInRouterException'),
    LimitCountInZoneException: require('./LimitCountInZoneException'),
    LimitMemoryInAccountException: require('./LimitMemoryInAccountException'),
    LimitSizeInAccountException: require('./LimitSizeInAccountException'),
    MissingIsoImageException: require('./MissingIsoImageException'),
    MissingParamException: require('./MissingParamException'),
    MustBeOfSameZoneException: require('./MustBeOfSameZoneException'),
    NoDisplayResponseException: require('./NoDisplayResponseException'),
    NotForRouterException: require('./NotForRouterException'),
    NotReplicatingException: require('./NotReplicatingException'),
    NotWithHybridconnException: require('./NotWithHybridconnException'),
    OldStoragePlanException: require('./OldStoragePlanException'),
    OperationFailureException: require('./OperationFailureException'),
    OperationTimeoutException: require('./OperationTimeoutException'),
    OriginalHashMismatchException: require('./OriginalHashMismatchException'),
    PacketFilterApplyingException: require('./PacketFilterApplyingException'),
    PacketFilterVersionMismatchException: require('./PacketFilterVersionMismatchException'),
    ParamIpNotFoundException: require('./ParamIpNotFoundException'),
    ParamResNotFoundException: require('./ParamResNotFoundException'),
    PaymentCreditCardException: require('./PaymentCreditCardException'),
    PaymentPaymentException: require('./PaymentPaymentException'),
    PaymentRegistrationException: require('./PaymentRegistrationException'),
    PaymentTelCertificationException: require('./PaymentTelCertificationException'),
    PaymentUnpayableException: require('./PaymentUnpayableException'),
    PenaltyOperationException: require('./PenaltyOperationException'),
    ReplicaAlreadyExistsException: require('./ReplicaAlreadyExistsException'),
    ReplicaNotFoundException: require('./ReplicaNotFoundException'),
    ResAlreadyConnectedException: require('./ResAlreadyConnectedException'),
    ResAlreadyDisconnectedException: require('./ResAlreadyDisconnectedException'),
    ResAlreadyExistsException: require('./ResAlreadyExistsException'),
    ResUsedInZoneException: require('./ResUsedInZoneException'),
    ResourcePathNotFoundException: require('./ResourcePathNotFoundException'),
    RunOutOfIpAddressException: require('./RunOutOfIpAddressException'),
    SameLicenseRequiredException: require('./SameLicenseRequiredException'),
    ServerCouldNotStopException: require('./ServerCouldNotStopException'),
    ServerIsCleaningException: require('./ServerIsCleaningException'),
    ServerOperationFailureException: require('./ServerOperationFailureException'),
    ServerPowerMustBeDownException: require('./ServerPowerMustBeDownException'),
    ServerPowerMustBeUpException: require('./ServerPowerMustBeUpException'),
    ServiceTemporarilyUnavailableException: require('./ServiceTemporarilyUnavailableException'),
    SizeMismatchException: require('./SizeMismatchException'),
    SnapshotInMigrationException: require('./SnapshotInMigrationException'),
    StillCreatingException: require('./StillCreatingException'),
    StorageAbnormalException: require('./StorageAbnormalException'),
    StorageOperationFailureException: require('./StorageOperationFailureException'),
    SwitchHybridConnectedException: require('./SwitchHybridConnectedException'),
    TemplateFtpIsOpenException: require('./TemplateFtpIsOpenException'),
    TemplateIsIncompleteException: require('./TemplateIsIncompleteException'),
    TooManyRequestException: require('./TooManyRequestException'),
    UnknownException: require('./UnknownException'),
    UnknownOsTypeException: require('./UnknownOsTypeException'),
    UnsupportedResClassException: require('./UnsupportedResClassException'),
    UserNotSpecifiedException: require('./UserNotSpecifiedException'),
    VncProxyRequestFailureException: require('./VncProxyRequestFailureException')
};