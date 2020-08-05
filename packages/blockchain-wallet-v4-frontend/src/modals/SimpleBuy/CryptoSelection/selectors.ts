import { ExtractSuccess } from 'core/types'
import { lift } from 'ramda'
import { SBCheckoutFormValuesType } from 'data/types'
import { selectors } from 'data'

export const getData = state => {
  const eligibilityR = selectors.components.simpleBuy.getSBFiatEligible(state)
  const formValues = selectors.form.getFormValues('simpleBuyCheckout')(
    state
  ) as SBCheckoutFormValuesType
  const pairsR = selectors.components.simpleBuy.getSBPairs(state)
  const userDataR = selectors.modules.profile.getUserData(state)

  return lift(
    (
      eligibility: ExtractSuccess<typeof eligibilityR>,
      pairs: ExtractSuccess<typeof pairsR>,
      userData: ExtractSuccess<typeof userDataR>
    ) => ({
      actionType: formValues ? formValues.actionType : 'BUY',
      eligibility,
      pairs,
      userData
    })
  )(eligibilityR, pairsR, userDataR)
}
