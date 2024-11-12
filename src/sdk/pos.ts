/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { posPosItemsAdd } from "../funcs/posPosItemsAdd.js";
import { posPosItemsAll } from "../funcs/posPosItemsAll.js";
import { posPosItemsDelete } from "../funcs/posPosItemsDelete.js";
import { posPosItemsOne } from "../funcs/posPosItemsOne.js";
import { posPosItemsUpdate } from "../funcs/posPosItemsUpdate.js";
import { posPosLocationsAdd } from "../funcs/posPosLocationsAdd.js";
import { posPosLocationsAll } from "../funcs/posPosLocationsAll.js";
import { posPosLocationsDelete } from "../funcs/posPosLocationsDelete.js";
import { posPosLocationsOne } from "../funcs/posPosLocationsOne.js";
import { posPosLocationsUpdate } from "../funcs/posPosLocationsUpdate.js";
import { posPosMerchantsAdd } from "../funcs/posPosMerchantsAdd.js";
import { posPosMerchantsAll } from "../funcs/posPosMerchantsAll.js";
import { posPosMerchantsDelete } from "../funcs/posPosMerchantsDelete.js";
import { posPosMerchantsOne } from "../funcs/posPosMerchantsOne.js";
import { posPosMerchantsUpdate } from "../funcs/posPosMerchantsUpdate.js";
import { posPosModifierGroupsAdd } from "../funcs/posPosModifierGroupsAdd.js";
import { posPosModifierGroupsAll } from "../funcs/posPosModifierGroupsAll.js";
import { posPosModifierGroupsDelete } from "../funcs/posPosModifierGroupsDelete.js";
import { posPosModifierGroupsOne } from "../funcs/posPosModifierGroupsOne.js";
import { posPosModifierGroupsUpdate } from "../funcs/posPosModifierGroupsUpdate.js";
import { posPosModifiersAdd } from "../funcs/posPosModifiersAdd.js";
import { posPosModifiersAll } from "../funcs/posPosModifiersAll.js";
import { posPosModifiersDelete } from "../funcs/posPosModifiersDelete.js";
import { posPosModifiersOne } from "../funcs/posPosModifiersOne.js";
import { posPosModifiersUpdate } from "../funcs/posPosModifiersUpdate.js";
import { posPosOrdersAdd } from "../funcs/posPosOrdersAdd.js";
import { posPosOrdersAll } from "../funcs/posPosOrdersAll.js";
import { posPosOrdersDelete } from "../funcs/posPosOrdersDelete.js";
import { posPosOrdersOne } from "../funcs/posPosOrdersOne.js";
import { posPosOrdersPay } from "../funcs/posPosOrdersPay.js";
import { posPosOrdersUpdate } from "../funcs/posPosOrdersUpdate.js";
import { posPosOrderTypesAdd } from "../funcs/posPosOrderTypesAdd.js";
import { posPosOrderTypesAll } from "../funcs/posPosOrderTypesAll.js";
import { posPosOrderTypesDelete } from "../funcs/posPosOrderTypesDelete.js";
import { posPosOrderTypesOne } from "../funcs/posPosOrderTypesOne.js";
import { posPosOrderTypesUpdate } from "../funcs/posPosOrderTypesUpdate.js";
import { posPosPaymentsAdd } from "../funcs/posPosPaymentsAdd.js";
import { posPosPaymentsAll } from "../funcs/posPosPaymentsAll.js";
import { posPosPaymentsDelete } from "../funcs/posPosPaymentsDelete.js";
import { posPosPaymentsOne } from "../funcs/posPosPaymentsOne.js";
import { posPosPaymentsUpdate } from "../funcs/posPosPaymentsUpdate.js";
import { posPosTendersAdd } from "../funcs/posPosTendersAdd.js";
import { posPosTendersAll } from "../funcs/posPosTendersAll.js";
import { posPosTendersDelete } from "../funcs/posPosTendersDelete.js";
import { posPosTendersOne } from "../funcs/posPosTendersOne.js";
import { posPosTendersUpdate } from "../funcs/posPosTendersUpdate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Pos extends ClientSDK {
  /**
   * List Orders
   *
   * @remarks
   * List Orders
   */
  async posOrdersAll(
    request: operations.PosOrdersAllRequest,
    options?: RequestOptions,
  ): Promise<operations.PosOrdersAllResponse> {
    return unwrapAsync(posPosOrdersAll(
      this,
      request,
      options,
    ));
  }

  /**
   * Create Order
   *
   * @remarks
   * Create Order
   */
  async posOrdersAdd(
    request: operations.PosOrdersAddRequest,
    options?: RequestOptions,
  ): Promise<operations.PosOrdersAddResponse> {
    return unwrapAsync(posPosOrdersAdd(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Order
   *
   * @remarks
   * Get Order
   */
  async posOrdersOne(
    request: operations.PosOrdersOneRequest,
    options?: RequestOptions,
  ): Promise<operations.PosOrdersOneResponse> {
    return unwrapAsync(posPosOrdersOne(
      this,
      request,
      options,
    ));
  }

  /**
   * Update Order
   *
   * @remarks
   * Updates an open order by adding, replacing, or deleting fields. Square-only: Orders with a `completed` or `canceled` status cannot be updated. To pay for an order, use the [payments endpoint](#tag/Payments).
   */
  async posOrdersUpdate(
    request: operations.PosOrdersUpdateRequest,
    options?: RequestOptions,
  ): Promise<operations.PosOrdersUpdateResponse> {
    return unwrapAsync(posPosOrdersUpdate(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete Order
   *
   * @remarks
   * Delete Order
   */
  async posOrdersDelete(
    request: operations.PosOrdersDeleteRequest,
    options?: RequestOptions,
  ): Promise<operations.PosOrdersDeleteResponse> {
    return unwrapAsync(posPosOrdersDelete(
      this,
      request,
      options,
    ));
  }

  /**
   * Pay Order
   *
   * @remarks
   * Pay Order
   */
  async posOrdersPay(
    request: operations.PosOrdersPayRequest,
    options?: RequestOptions,
  ): Promise<operations.PosOrdersPayResponse> {
    return unwrapAsync(posPosOrdersPay(
      this,
      request,
      options,
    ));
  }

  /**
   * List Payments
   *
   * @remarks
   * List Payments
   */
  async posPaymentsAll(
    request: operations.PosPaymentsAllRequest,
    options?: RequestOptions,
  ): Promise<operations.PosPaymentsAllResponse> {
    return unwrapAsync(posPosPaymentsAll(
      this,
      request,
      options,
    ));
  }

  /**
   * Create Payment
   *
   * @remarks
   * Create Payment
   */
  async posPaymentsAdd(
    request: operations.PosPaymentsAddRequest,
    options?: RequestOptions,
  ): Promise<operations.PosPaymentsAddResponse> {
    return unwrapAsync(posPosPaymentsAdd(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Payment
   *
   * @remarks
   * Get Payment
   */
  async posPaymentsOne(
    request: operations.PosPaymentsOneRequest,
    options?: RequestOptions,
  ): Promise<operations.PosPaymentsOneResponse> {
    return unwrapAsync(posPosPaymentsOne(
      this,
      request,
      options,
    ));
  }

  /**
   * Update Payment
   *
   * @remarks
   * Update Payment
   */
  async posPaymentsUpdate(
    request: operations.PosPaymentsUpdateRequest,
    options?: RequestOptions,
  ): Promise<operations.PosPaymentsUpdateResponse> {
    return unwrapAsync(posPosPaymentsUpdate(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete Payment
   *
   * @remarks
   * Delete Payment
   */
  async posPaymentsDelete(
    request: operations.PosPaymentsDeleteRequest,
    options?: RequestOptions,
  ): Promise<operations.PosPaymentsDeleteResponse> {
    return unwrapAsync(posPosPaymentsDelete(
      this,
      request,
      options,
    ));
  }

  /**
   * List Merchants
   *
   * @remarks
   * List Merchants
   */
  async posMerchantsAll(
    request: operations.PosMerchantsAllRequest,
    options?: RequestOptions,
  ): Promise<operations.PosMerchantsAllResponse> {
    return unwrapAsync(posPosMerchantsAll(
      this,
      request,
      options,
    ));
  }

  /**
   * Create Merchant
   *
   * @remarks
   * Create Merchant
   */
  async posMerchantsAdd(
    request: operations.PosMerchantsAddRequest,
    options?: RequestOptions,
  ): Promise<operations.PosMerchantsAddResponse> {
    return unwrapAsync(posPosMerchantsAdd(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Merchant
   *
   * @remarks
   * Get Merchant
   */
  async posMerchantsOne(
    request: operations.PosMerchantsOneRequest,
    options?: RequestOptions,
  ): Promise<operations.PosMerchantsOneResponse> {
    return unwrapAsync(posPosMerchantsOne(
      this,
      request,
      options,
    ));
  }

  /**
   * Update Merchant
   *
   * @remarks
   * Update Merchant
   */
  async posMerchantsUpdate(
    request: operations.PosMerchantsUpdateRequest,
    options?: RequestOptions,
  ): Promise<operations.PosMerchantsUpdateResponse> {
    return unwrapAsync(posPosMerchantsUpdate(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete Merchant
   *
   * @remarks
   * Delete Merchant
   */
  async posMerchantsDelete(
    request: operations.PosMerchantsDeleteRequest,
    options?: RequestOptions,
  ): Promise<operations.PosMerchantsDeleteResponse> {
    return unwrapAsync(posPosMerchantsDelete(
      this,
      request,
      options,
    ));
  }

  /**
   * List Locations
   *
   * @remarks
   * List Locations
   */
  async posLocationsAll(
    request: operations.PosLocationsAllRequest,
    options?: RequestOptions,
  ): Promise<operations.PosLocationsAllResponse> {
    return unwrapAsync(posPosLocationsAll(
      this,
      request,
      options,
    ));
  }

  /**
   * Create Location
   *
   * @remarks
   * Create Location
   */
  async posLocationsAdd(
    request: operations.PosLocationsAddRequest,
    options?: RequestOptions,
  ): Promise<operations.PosLocationsAddResponse> {
    return unwrapAsync(posPosLocationsAdd(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Location
   *
   * @remarks
   * Get Location
   */
  async posLocationsOne(
    request: operations.PosLocationsOneRequest,
    options?: RequestOptions,
  ): Promise<operations.PosLocationsOneResponse> {
    return unwrapAsync(posPosLocationsOne(
      this,
      request,
      options,
    ));
  }

  /**
   * Update Location
   *
   * @remarks
   * Update Location
   */
  async posLocationsUpdate(
    request: operations.PosLocationsUpdateRequest,
    options?: RequestOptions,
  ): Promise<operations.PosLocationsUpdateResponse> {
    return unwrapAsync(posPosLocationsUpdate(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete Location
   *
   * @remarks
   * Delete Location
   */
  async posLocationsDelete(
    request: operations.PosLocationsDeleteRequest,
    options?: RequestOptions,
  ): Promise<operations.PosLocationsDeleteResponse> {
    return unwrapAsync(posPosLocationsDelete(
      this,
      request,
      options,
    ));
  }

  /**
   * List Items
   *
   * @remarks
   * List Items
   */
  async posItemsAll(
    request: operations.PosItemsAllRequest,
    options?: RequestOptions,
  ): Promise<operations.PosItemsAllResponse> {
    return unwrapAsync(posPosItemsAll(
      this,
      request,
      options,
    ));
  }

  /**
   * Create Item
   *
   * @remarks
   * Create Item
   */
  async posItemsAdd(
    request: operations.PosItemsAddRequest,
    options?: RequestOptions,
  ): Promise<operations.PosItemsAddResponse> {
    return unwrapAsync(posPosItemsAdd(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Item
   *
   * @remarks
   * Get Item
   */
  async posItemsOne(
    request: operations.PosItemsOneRequest,
    options?: RequestOptions,
  ): Promise<operations.PosItemsOneResponse> {
    return unwrapAsync(posPosItemsOne(
      this,
      request,
      options,
    ));
  }

  /**
   * Update Item
   *
   * @remarks
   * Update Item
   */
  async posItemsUpdate(
    request: operations.PosItemsUpdateRequest,
    options?: RequestOptions,
  ): Promise<operations.PosItemsUpdateResponse> {
    return unwrapAsync(posPosItemsUpdate(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete Item
   *
   * @remarks
   * Delete Item
   */
  async posItemsDelete(
    request: operations.PosItemsDeleteRequest,
    options?: RequestOptions,
  ): Promise<operations.PosItemsDeleteResponse> {
    return unwrapAsync(posPosItemsDelete(
      this,
      request,
      options,
    ));
  }

  /**
   * List Modifiers
   *
   * @remarks
   * List Modifiers
   */
  async posModifiersAll(
    request: operations.PosModifiersAllRequest,
    options?: RequestOptions,
  ): Promise<operations.PosModifiersAllResponse> {
    return unwrapAsync(posPosModifiersAll(
      this,
      request,
      options,
    ));
  }

  /**
   * Create Modifier
   *
   * @remarks
   * Create Modifier
   */
  async posModifiersAdd(
    request: operations.PosModifiersAddRequest,
    options?: RequestOptions,
  ): Promise<operations.PosModifiersAddResponse> {
    return unwrapAsync(posPosModifiersAdd(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Modifier
   *
   * @remarks
   * Get Modifier
   */
  async posModifiersOne(
    request: operations.PosModifiersOneRequest,
    options?: RequestOptions,
  ): Promise<operations.PosModifiersOneResponse> {
    return unwrapAsync(posPosModifiersOne(
      this,
      request,
      options,
    ));
  }

  /**
   * Update Modifier
   *
   * @remarks
   * Update Modifier
   */
  async posModifiersUpdate(
    request: operations.PosModifiersUpdateRequest,
    options?: RequestOptions,
  ): Promise<operations.PosModifiersUpdateResponse> {
    return unwrapAsync(posPosModifiersUpdate(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete Modifier
   *
   * @remarks
   * Delete Modifier
   */
  async posModifiersDelete(
    request: operations.PosModifiersDeleteRequest,
    options?: RequestOptions,
  ): Promise<operations.PosModifiersDeleteResponse> {
    return unwrapAsync(posPosModifiersDelete(
      this,
      request,
      options,
    ));
  }

  /**
   * List Modifier Groups
   *
   * @remarks
   * List Modifier Groups
   */
  async posModifierGroupsAll(
    request: operations.PosModifierGroupsAllRequest,
    options?: RequestOptions,
  ): Promise<operations.PosModifierGroupsAllResponse> {
    return unwrapAsync(posPosModifierGroupsAll(
      this,
      request,
      options,
    ));
  }

  /**
   * Create Modifier Group
   *
   * @remarks
   * Create Modifier Group
   */
  async posModifierGroupsAdd(
    request: operations.PosModifierGroupsAddRequest,
    options?: RequestOptions,
  ): Promise<operations.PosModifierGroupsAddResponse> {
    return unwrapAsync(posPosModifierGroupsAdd(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Modifier Group
   *
   * @remarks
   * Get Modifier Group
   */
  async posModifierGroupsOne(
    request: operations.PosModifierGroupsOneRequest,
    options?: RequestOptions,
  ): Promise<operations.PosModifierGroupsOneResponse> {
    return unwrapAsync(posPosModifierGroupsOne(
      this,
      request,
      options,
    ));
  }

  /**
   * Update Modifier Group
   *
   * @remarks
   * Update Modifier Group
   */
  async posModifierGroupsUpdate(
    request: operations.PosModifierGroupsUpdateRequest,
    options?: RequestOptions,
  ): Promise<operations.PosModifierGroupsUpdateResponse> {
    return unwrapAsync(posPosModifierGroupsUpdate(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete Modifier Group
   *
   * @remarks
   * Delete Modifier Group
   */
  async posModifierGroupsDelete(
    request: operations.PosModifierGroupsDeleteRequest,
    options?: RequestOptions,
  ): Promise<operations.PosModifierGroupsDeleteResponse> {
    return unwrapAsync(posPosModifierGroupsDelete(
      this,
      request,
      options,
    ));
  }

  /**
   * List Order Types
   *
   * @remarks
   * List Order Types
   */
  async posOrderTypesAll(
    request: operations.PosOrderTypesAllRequest,
    options?: RequestOptions,
  ): Promise<operations.PosOrderTypesAllResponse> {
    return unwrapAsync(posPosOrderTypesAll(
      this,
      request,
      options,
    ));
  }

  /**
   * Create Order Type
   *
   * @remarks
   * Create Order Type
   */
  async posOrderTypesAdd(
    request: operations.PosOrderTypesAddRequest,
    options?: RequestOptions,
  ): Promise<operations.PosOrderTypesAddResponse> {
    return unwrapAsync(posPosOrderTypesAdd(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Order Type
   *
   * @remarks
   * Get Order Type
   */
  async posOrderTypesOne(
    request: operations.PosOrderTypesOneRequest,
    options?: RequestOptions,
  ): Promise<operations.PosOrderTypesOneResponse> {
    return unwrapAsync(posPosOrderTypesOne(
      this,
      request,
      options,
    ));
  }

  /**
   * Update Order Type
   *
   * @remarks
   * Update Order Type
   */
  async posOrderTypesUpdate(
    request: operations.PosOrderTypesUpdateRequest,
    options?: RequestOptions,
  ): Promise<operations.PosOrderTypesUpdateResponse> {
    return unwrapAsync(posPosOrderTypesUpdate(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete Order Type
   *
   * @remarks
   * Delete Order Type
   */
  async posOrderTypesDelete(
    request: operations.PosOrderTypesDeleteRequest,
    options?: RequestOptions,
  ): Promise<operations.PosOrderTypesDeleteResponse> {
    return unwrapAsync(posPosOrderTypesDelete(
      this,
      request,
      options,
    ));
  }

  /**
   * List Tenders
   *
   * @remarks
   * List Tenders
   */
  async posTendersAll(
    request: operations.PosTendersAllRequest,
    options?: RequestOptions,
  ): Promise<operations.PosTendersAllResponse> {
    return unwrapAsync(posPosTendersAll(
      this,
      request,
      options,
    ));
  }

  /**
   * Create Tender
   *
   * @remarks
   * Create Tender
   */
  async posTendersAdd(
    request: operations.PosTendersAddRequest,
    options?: RequestOptions,
  ): Promise<operations.PosTendersAddResponse> {
    return unwrapAsync(posPosTendersAdd(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Tender
   *
   * @remarks
   * Get Tender
   */
  async posTendersOne(
    request: operations.PosTendersOneRequest,
    options?: RequestOptions,
  ): Promise<operations.PosTendersOneResponse> {
    return unwrapAsync(posPosTendersOne(
      this,
      request,
      options,
    ));
  }

  /**
   * Update Tender
   *
   * @remarks
   * Update Tender
   */
  async posTendersUpdate(
    request: operations.PosTendersUpdateRequest,
    options?: RequestOptions,
  ): Promise<operations.PosTendersUpdateResponse> {
    return unwrapAsync(posPosTendersUpdate(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete Tender
   *
   * @remarks
   * Delete Tender
   */
  async posTendersDelete(
    request: operations.PosTendersDeleteRequest,
    options?: RequestOptions,
  ): Promise<operations.PosTendersDeleteResponse> {
    return unwrapAsync(posPosTendersDelete(
      this,
      request,
      options,
    ));
  }
}
