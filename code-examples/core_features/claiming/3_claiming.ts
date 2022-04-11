import type {
  IClaim,
  IRequestForAttestation,
  KeystoreSigner
} from '@kiltprotocol/types'
import { DidDetails } from '@kiltprotocol/did'
import { RequestForAttestation } from '@kiltprotocol/core'

export async function main(
  claim: IClaim,
  keystore: KeystoreSigner,
  claimer: DidDetails
): Promise<IRequestForAttestation> {
  const requestForAttestation = RequestForAttestation.fromClaim(claim)
  return requestForAttestation.signWithDidKey(
    keystore,
    claimer,
    claimer.authenticationKey.id
  )
}
