---
id: "redux_party_service"
title: "Module: redux/party/service"
sidebar_label: "redux/party/service"
custom_edit_url: null
hide_title: true
---

# Module: redux/party/service

## Functions

### createParty

▸ **createParty**(`values`: *any*): *function*

#### Parameters:

Name | Type |
:------ | :------ |
`values` | *any* |

**Returns:** (`dispatch`: *Dispatch*<AnyAction\>) => *Promise*<any\>

Defined in: [packages/client-core/redux/party/service.ts:74](https://github.com/xr3ngine/xr3ngine/blob/56376a778/packages/client-core/redux/party/service.ts#L74)

___

### getParties

▸ `Const`**getParties**(): *Promise*<void\>

**Returns:** *Promise*<void\>

Defined in: [packages/client-core/redux/party/service.ts:36](https://github.com/xr3ngine/xr3ngine/blob/56376a778/packages/client-core/redux/party/service.ts#L36)

___

### getParty

▸ **getParty**(): *function*

**Returns:** (`dispatch`: *Dispatch*<AnyAction\>, `getState`: *any*) => *Promise*<any\>

Defined in: [packages/client-core/redux/party/service.ts:21](https://github.com/xr3ngine/xr3ngine/blob/56376a778/packages/client-core/redux/party/service.ts#L21)

___

### removeParty

▸ **removeParty**(`partyId`: *string*): *function*

#### Parameters:

Name | Type |
:------ | :------ |
`partyId` | *string* |

**Returns:** (`dispatch`: *Dispatch*<AnyAction\>) => *Promise*<any\>

Defined in: [packages/client-core/redux/party/service.ts:86](https://github.com/xr3ngine/xr3ngine/blob/56376a778/packages/client-core/redux/party/service.ts#L86)

___

### removePartyUser

▸ **removePartyUser**(`partyUserId`: *string*): *function*

#### Parameters:

Name | Type |
:------ | :------ |
`partyUserId` | *string* |

**Returns:** (`dispatch`: *Dispatch*<AnyAction\>) => *Promise*<any\>

Defined in: [packages/client-core/redux/party/service.ts:106](https://github.com/xr3ngine/xr3ngine/blob/56376a778/packages/client-core/redux/party/service.ts#L106)

___

### transferPartyOwner

▸ **transferPartyOwner**(`partyUserId`: *string*): *function*

#### Parameters:

Name | Type |
:------ | :------ |
`partyUserId` | *string* |

**Returns:** (`dispatch`: *Dispatch*<AnyAction\>) => *Promise*<any\>

Defined in: [packages/client-core/redux/party/service.ts:117](https://github.com/xr3ngine/xr3ngine/blob/56376a778/packages/client-core/redux/party/service.ts#L117)