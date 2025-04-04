<script lang="ts" setup>
const { t } = useI18n({ useScope: 'local' })
const localePath = useLocalePath()

const links = computed(() => [
  {
    to: localePath('index'),
    label: t('breadcrumb.items.index.label'),
    icon: t('breadcrumb.items.index.icon'),
  },
  {
    to: localePath('privacy-policy'),
    label: t('breadcrumb.items.privacy-policy.label'),
    icon: t('breadcrumb.items.privacy-policy.icon'),
    current: true,
  },
])

useSeoMeta({
  title: t('title'),
})
useHead({
  title: t('title'),
})

definePageMeta({
  layout: 'default',
})
</script>

<template>
  <PageWrapper class="container flex flex-col">
    <UBreadcrumb
      :links="links"
      :ui="{
        li: 'text-primary-950 dark:text-primary-50',
        base: 'text-xs md:text-md',
      }"
      class="container-xs relative mb-5 min-w-0"
    />
    <PageTitle
      :text="t('title')"
      class="mb-4 text-center capitalize"
    />

    <div class="article container-xs">
      <p
        class="
              text-primary-950 text-xl font-semibold

              dark:text-primary-50
            "
      >
        Εισαγωγή
      </p>
      <p
        class="
              text-primary-950

              dark:text-primary-50
            "
      >
        Θα θέλαμε να σας ενημερώσουμε ότι για το Webside η προστασία των προσωπικών δεδομένων των χρηστών μας έχει
        πρωταρχική σημασία. Για το λόγο αυτό λαμβάνουμε τα κατάλληλα μέτρα για να προστατέψουμε τα προσωπικά
        δεδομένα που επεξεργαζόμαστε από τυχόν απώλεια, αλλοίωση, διαρροή, παράνομη διαβίβαση ή με οποιοδήποτε άλλο
        τρόπο αθέμιτη επεξεργασία και να διασφαλίσουμε ότι η επεξεργασία των προσωπικών σας δεδομένων
        πραγματοποιείται πάντοτε σύμφωνα με τις υποχρεώσεις που τίθενται από το νομικό πλαίσιο, τόσο από την ίδια
        την εταιρία, όσο και από τρίτους που επεξεργάζονται προσωπικά δεδομένα για λογαριασμό της εταιρίας. Τι είναι
        το GDPR; Ο Γενικός Κανονισμός για την Προστασία των Προσωπικών Δεδομένων (General Data Protection Regulation
        – GDPR) αποτελεί το νέο ρυθμιστικό πλαίσιο της Ευρωπαϊκή Ένωσης (ΕΕ) στον εξεταζόμενο τομέα. Αντικείμενο του
        Κανονισμού είναι η θέσπιση των προϋποθέσεων για την επεξεργασία δεδομένων προσωπικού χαρακτήρα, προς
        προστασία των δικαιωμάτων και των ελευθεριών των φυσικών προσώπων και ιδίως του δικαιώματος προστασίας
        προσωπικών δεδομένων.
      </p>
      <p
        class="
              text-primary-950 text-xl font-semibold

              dark:text-primary-50
            "
      >
        Ποιες κατηγορίες προσωπικών δεδομένων επεξεργαζόμαστε;
      </p>
      <p
        class="
              text-primary-950

              dark:text-primary-50
            "
      >
        Τα προσωπικά δεδομένα που επεξεργαζόμαστε, είναι τα απολύτως αναγκαία, απαραίτητα και κατάλληλα για την
        επίτευξη των επιδιωκόμενων σκοπών μας και συνοψίζονται στα εξής: Προσωπικά δεδομένα, τα οποία μας παρέχετε
        εσείς, όπως:
      </p>
      <ul
        class="
              text-primary-950

              dark:text-primary-50
            "
      >
        <li>
          Δεδομένα ταυτοποίησης προσώπου & νομιμοποίησης του υποκειμένου των συναλλαγών (ονοματεπώνυμο,
          ημερομηνία
          γέννησης, κ.α.)
        </li>
        <li>
          Δεδομένα επικοινωνίας (ταχυδρομική διεύθυνση (E-mail), αριθμός σταθερής ή κινητής τηλεφωνίας,
          διεύθυνση
          ηλεκτρονικού ταχυδρομείου, FAX, κ.α.)
        </li>
      </ul>

      <p
        class="
              text-primary-950 text-xl font-semibold

              dark:text-primary-50
            "
      >
        Για τη δημιουργία λογαριασμού στο webside.gr
      </p>
      <p
        class="
              text-primary-950

              dark:text-primary-50
            "
      >
        Προσωπικά δεδομένα συλλέγονται όταν δημιουργείτε λογαριασμό στον ιστότοπο του Webside webside.gr. Κατά τη
        δημιουργία λογαριασμού μπορεί να σας ζητηθούν περισσότερα στοιχεία, ωστόσο θα είναι τα ελάχιστα απαιτούμενα
        για τη σύναψη και ολοκλήρωση δημιουργίας.
      </p>
      <p
        class="
              text-primary-950 text-xl font-semibold

              dark:text-primary-50
            "
      >
        Για να σας ενημερώσουμε για τα νέα και τις προσφορές μας
      </p>
      <p
        class="
              text-primary-950

              dark:text-primary-50
            "
      >
        Εφόσον έχετε συναινέσει σε αυτό ή καλύπτεται από το έννομο συμφέρον μας, (στις περιπτώσεις των εγγεγραμένων
        χρηστών - πελατών) και υπό τις συγκεκριμένες προϋποθέσεις που θέτει το νομικό πλαίσιο, σας αποστέλλουμε
        ενημερώσεις για προϊόντα, υπηρεσίες, προσφορές κλπ. μέσω E-mail αλλά και των μέσων κοινωνικής δικτύωσης που
        διατηρούμε (Facebook/Instagram/Youtube κ.α.). Ειδικότερα, το Webside επεξεργάζεται προσωπικά δεδομένα
        σύμφωνα με το ισχύον κάθε φορά πλαίσιο, σας ενημερώνει για προσφορές και τα νέα μας μέσω της αποστολής
        ενημερωτικών newsletters.
      </p>
    </div>
  </PageWrapper>
</template>

<i18n lang="yaml">
el:
  title: Πολιτική Απορρήτου
  breadcrumb:
    items:
      privacy-policy:
        label: Πολιτική Απορρήτου
        icon: i-heroicons-clipboard-document-list
</i18n>
